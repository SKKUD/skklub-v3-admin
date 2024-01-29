import {
	Box,
	Container,
	Stack,
	Typography,
	Modal,
	Unstable_Grid2 as Grid,
} from '@mui/material';
import { AccountProfile } from '@/components/account/account-profile';
import { AccountProfileDetails } from './account-profile-details';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import CancelIcon from '@mui/icons-material/Cancel';

const EditModal = ({ data, open, setOpen }) => {
	const [editedData, setEditedData] = useState(data);

	useEffect(() => {
		setEditedData(data);
	}, [data]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const ModalBox = styled.div`
		/* modal css */
		width: 100%;
		height: 100%;
		padding: 5rem;
	`;

	return (
		<Modal open={open} onClose={handleClose}>
			<ModalBox maxWidth="lg">
				<Stack spacing={3}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Typography variant="h4">정보 수정</Typography>
						<CancelIcon
							onClick={handleClose}
							sx={{
								cursor: 'pointer',
								fontSize: '2rem',
							}}
						/>
					</div>
					<div>
						<Grid container spacing={3}>
							<Grid xs={12} md={6} lg={4}>
								<AccountProfile />
							</Grid>
							<Grid xs={12} md={6} lg={8}>
								<AccountProfileDetails
									data={editedData}
									handleInputChange={handleInputChange}
								/>
							</Grid>
						</Grid>
					</div>
				</Stack>
			</ModalBox>
		</Modal>
	);
};

export default EditModal;
import { TextField } from '@mui/material';
import React, { useState } from 'react';
