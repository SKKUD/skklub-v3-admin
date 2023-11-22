'use client';

import {
	Box,
	Card,
	Checkbox,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import NoticeInfoModal from './notice-info-modal';
import { convertTimestamp } from '@/utils/convertUtils';

export const NoticeTable = (props) => {
	const {
		count = 0,
		items = [],
		onDeselectAll,
		onDeselectOne,
		onPageChange = () => {},
		onRowsPerPageChange,
		onSelectAll,
		onSelectOne,
		page = 0,
		rowsPerPage = 0,
		selected = [],
	} = props;

	const selectedSome = selected.length > 0 && selected.length < items.length;
	const selectedAll = items.length > 0 && selected.length === items.length;
	const [modalOpen, setModalOpen] = useState(false);
	const [noticeId, setNoticeId] = useState('');
	const handleOpen = (cid) => {
		setModalOpen(true);
		setNoticeId(cid);
	};
	const handleClose = () => setModalOpen(false);

	return (
		<>
			<Card>
				<Box sx={{
					overflowX: 'auto',
					'&::-webkit-scrollbar': {
						height: '0.4em',
					},
					'&::-webkit-scrollbar-track': {
						boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
						webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: 'rgba(0,0,0,.1)',
						outline: '1px solid slategrey',
						borderRadius: '10px',
					},
					minWidth: 800,
				 }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell padding="checkbox">
									<Checkbox
										checked={selectedAll}
										indeterminate={selectedSome}
										onChange={(event) => {
											if (event.target.checked) {
												onSelectAll?.();
											} else {
												onDeselectAll?.();
											}
										}}
									/>
								</TableCell>
								<TableCell>NO</TableCell>
								<TableCell>제목</TableCell>
								<TableCell>글쓴이</TableCell>
								<TableCell>작성일지</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{items.map((notice) => {
								const isSelected = selected.includes(notice.no);

								return (
									<TableRow
										hover
										key={notice.noticeId}
										selected={isSelected}
										onClick={() => handleOpen(notice.noticeId)}
									>
										<TableCell padding="checkbox">
											<Checkbox
												checked={isSelected}
												onChange={(event) => {
													if (event.target.checked) {
														onSelectOne?.(notice.noticeId);
													} else {
														onDeselectOne?.(notice.noticeId);
													}
												}}
											/>
										</TableCell>
										<TableCell>{notice.noticeId}</TableCell>
										<TableCell>{notice.title}</TableCell>
										<TableCell>
											<Stack alignItems="center" direction="row" spacing={2}>
												<Typography variant="subtitle2">
													{notice.writerName}
												</Typography>
											</Stack>
										</TableCell>
										<TableCell>{convertTimestamp(notice.createdAt)}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Box>
				<TablePagination
					component="div"
					count={count}
					onPageChange={onPageChange}
					onRowsPerPageChange={onRowsPerPageChange}
					page={page}
					rowsPerPage={rowsPerPage}
					rowsPerPageOptions={[5, 10, 25]}
				/>
			</Card>
			<NoticeInfoModal
				noticeId={noticeId}
				handleClose={handleClose}
				modalOpen={modalOpen}
			/>
		</>
	);
};
