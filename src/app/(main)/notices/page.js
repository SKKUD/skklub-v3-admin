'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { useSelection } from '@/hooks/use-selection';
import { NoticeTable } from '@/components/notice/notice-table';
// import { CustomersSearch } from "@/sections/notices/customers-search";
import { applyPagination } from '@/utils/apply-pagination';
import MiniHeader from '@/components/common/mini-header';
import axios from 'axios';
// import { NOTICE_DATA } from "@/constants/constants";

const useNotices = (page, rowsPerPage) => {
	const [notices, setNotices] = useState([]);

	useEffect(() => {
		axios
			.get('/notice/prev')
			.then((response) => {
				setNotices(response.data.content);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return useMemo(() => {
		return applyPagination(notices, page, rowsPerPage);
	}, [notices, page, rowsPerPage]);
};

const useNoticeIds = (notices) => {
	return useMemo(() => {
		return notices.map((notice) => notice.id);
	}, [notices]);
};

export default function NoticesPage() {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const notices = useNotices(page, rowsPerPage);
	const noticesIds = useNoticeIds(notices);
	const noticesSelection = useSelection(noticesIds);

	const handlePageChange = useCallback((event, value) => {
		setPage(value);
	}, []);

	const handleRowsPerPageChange = useCallback((event) => {
		setRowsPerPage(event.target.value);
	}, []);

	return (
		<>
			<Head>
				<title>Notices | 공지사항</title>
			</Head>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="xl">
					<Stack spacing={3}>
						<MiniHeader
							label={'공지 관리'}
							noticesSelection={noticesSelection}
						/>
						{/* <CustomersSearch /> */}
						<NoticeTable
							count={notices.length}
							items={notices}
							onDeselectAll={noticesSelection.handleDeselectAll}
							onDeselectOne={noticesSelection.handleDeselectOne}
							onPageChange={handlePageChange}
							onRowsPerPageChange={handleRowsPerPageChange}
							onSelectAll={noticesSelection.handleSelectAll}
							onSelectOne={noticesSelection.handleSelectOne}
							page={page}
							rowsPerPage={rowsPerPage}
							selected={noticesSelection.selected}
						/>
					</Stack>
				</Container>
			</Box>
		</>
	);
}
