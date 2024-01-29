'use client';

import CommonTable from '@/components/common/common-table';
import { useEffect, useState, useMemo } from 'react';
import useCrudRequest from '@/hooks/use-crud-request';
import axios from 'axios';
import styled from '@emotion/styled';
import {
	Box,
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditModal from '@/components/clubManagement/edit-modal';
import { Edit } from '@mui/icons-material';

const Clubs = () => {
	// Read request to /club/prev
	const crud = useCrudRequest('/club/prev');
	const [tableData, setTableData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [rowData, setRowData] = useState(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		crud.read({
			campus: '명륜',
		});
	}, []);

	const columns = useMemo(
		() => [
			{
				header: '동아리명',
				accessorKey: 'name',
			},
			{
				header: '캠퍼스',
				accessorKey: 'campus',
			},
			{
				header: '중분류',
				accessorKey: 'clubType',
			},
			{
				header: '분과',
				accessorKey: 'belongs',
			},
		],
		[]
	);

	const openModal = (row) => {
		setRowData(row.original);
		setOpen(true);
	};

	const tableOptions = {
		enableRowActions: true,
		renderRowActions: ({ row, table }) => (
			<>
				<Box sx={{ display: 'flex', gap: '1rem' }}>
					<Tooltip title="Edit">
						<IconButton onClick={() => openModal(row)}>
							<EditIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Delete">
						<IconButton
							color="error"
							onClick={() => openDeleteConfirmModal(row)}
						>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</Box>
			</>
		),
	};

	const TableContainer = styled.div`
		width: 100%;
		height: 100%;
		padding: 1.2rem;
		position: relative;
	`;

	if (crud.loading) {
		return <div>로딩중</div>;
	}

	if (crud.error) {
		return <div>에러</div>;
	}

	if (crud.data) {
		return (
			<TableContainer>
				<div>
					<CommonTable
						data={crud.data.content}
						columns={columns}
						options={tableOptions}
					/>
					<EditModal data={rowData} open={open} setOpen={setOpen} />
				</div>
			</TableContainer>
		);
	}
};

export default Clubs;
