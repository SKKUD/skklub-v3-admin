'use client';

import { useEffect, useState, useMemo } from 'react';
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
import DeleteModal from '@/components/clubManagement/delete-modal';
import { Edit } from '@mui/icons-material';

import {
	MaterialReactTable,
	useMaterialReactTable,
} from 'material-react-table';

const Clubs = () => {
	const [data, setData] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isRefetching, setIsRefetching] = useState(false);

	const [rowCount, setRowCount] = useState(0);
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 20,
	});

	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);

	const [globalFilter, setGlobalFilter] = useState('');
	const [rowData, setRowData] = useState(null);

	const [campus, setCampus] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			if (!data.length) {
				setIsLoading(true);
			} else {
				setIsRefetching(true);
			}

			if (globalFilter) {
				try {
					axios
						.get('/club/search/prevs', {
							params: {
								keyword: globalFilter,
							},
						})
						.then((response) => {
							setData(response.data.content);
							setRowCount(response.data.totalElements);
						});
				} catch (error) {
					setIsError(true);
					console.error(error);
					return;
				}
				setIsError(false);
				setIsLoading(false);
				setIsRefetching(false);
			} else {
				try {
					switch (localStorage.getItem('role')) {
						case 'ROLE_MASTER':
							setCampus('명륜');
							break;
						case 'ROLE_ADMIN_SUWON_CENTRAL':
							setCampus('율전');
							break;
						case 'ROLE_ADMIN_SEOUL_SOUTH':
							setCampus('명륜');
							break;
						default:
							setCampus('명륜');
							break;
					}

					if (campus === '') {
						return;
					}

					axios
						.get('/club/prev', {
							params: {
								campus: campus,
								clubType: '중앙동아리',
								page: pagination.pageIndex,
								size: pagination.pageSize,
							},
						})
						.then((response) => {
							setData(response.data.content);
							setRowCount(response.data.totalElements);
						});
				} catch (error) {
					setIsError(true);
					console.error(error);
					return;
				}
				setIsError(false);
				setIsLoading(false);
				setIsRefetching(false);
			}
		};

		fetchData();
	}, [
		pagination.pageIndex,
		globalFilter,
		pagination.pageSize,
		campus,
		isRefetching,
	]);

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

	const openModalEdit = (row) => {
		setRowData(row.original);
		setOpenEdit(true);
	};

	const openDeleteConfirmModal = (row) => {
		setRowData(row.original);
		setOpenDelete(true);
	};

	const table = useMaterialReactTable({
		positionGlobalFilter: 'left',
		initialState: {
			showGlobalFilter: true,
		},
		enableGlobalFilter: true,
		enableColumnFilters: false,
		enableDensityToggle: false,
		enableFullScreenToggle: false,
		enableHiding: false,
		enableSorting: false,
		columns,
		data,
		manualFiltering: false,
		manualPagination: true,
		muiToolbarAlertBannerProps: isError
			? {
					color: 'error',
					children: 'Error loading data',
			  }
			: undefined,
		onGlobalFilterChange: setGlobalFilter,
		onPaginationChange: setPagination,
		rowCount,
		state: {
			globalFilter,
			isLoading,
			pagination,
			showAlertBanner: isError,
			showProgressBars: isRefetching,
		},
		enableRowActions: true,
		renderRowActions: ({ row, table }) => (
			<>
				<Box sx={{ display: 'flex', gap: '1rem' }}>
					<Tooltip title="Edit">
						<IconButton onClick={() => openModalEdit(row)}>
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
	});

	const TableContainer = styled.div`
		width: 100%;
		height: 100%;
		padding: 1.2rem;
		position: relative;
	`;

	if (isLoading) {
		return <div>Loading...</div>;
	} else {
		return (
			<TableContainer>
				<div>
					<MaterialReactTable table={table} />
					<EditModal
						data={rowData}
						openEdit={openEdit}
						setOpenEdit={setOpenEdit}
					/>
					<DeleteModal
						data={rowData}
						openDelete={openDelete}
						setOpenDelete={setOpenDelete}
						setIsRefetching={setIsRefetching}
					/>
				</div>
			</TableContainer>
		);
	}
};

export default Clubs;
