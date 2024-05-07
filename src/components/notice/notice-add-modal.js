import { Box, Typography, TextField, Button } from '@mui/material';
import styled from '@emotion/styled';
import CustomModal from '../common/custom-modal';
import { useState } from 'react';
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axiosInterceptorInstance from '../../../axios/axiosInterceptorInstance';

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
});

const StyledHeader = styled(Typography)({
	width: '90%',
	margin: '20px auto',
	color: '#FFF',
	fontSize: '28px',
	display: 'flex',
	'& > b': {
		color: '#80a4ff',
	},
});

const Warn = styled(Box)`
	width: 90%;
	margin: 0 auto;
	margin-bottom: 30px;
	color: #666;
`;

const InfoWrap = styled(Box)`
	border-radius: 16px;
	position: relative;
	margin: 20px auto 50px auto;
	width: 90%;
`;

const Label = styled(Box)`
	color: #80a4ff;
	padding: 5px;
	width: 150px;
	height: 44px;
	line-height: 35px;
	border-radius: 10px;
`;

const NoticeAddModal = ({ openAdd, setOpenAdd, setIsRefetching }) => {
	const [noticeData, setNoticeData] = useState({
		title: '',
		content: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNoticeData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const [files, setFiles] = useState([]);

	const uploadToClient = (event) => {
		const fileList = event.target.files;
		if (fileList.length !== null) {
			setFiles((prevFiles) => [...prevFiles, ...fileList]);
		}
	};

	const handleAddNotice = (e) => {
		e.preventDefault();
		let dataForm = new FormData();
		dataForm.append('title', noticeData.title);
		dataForm.append('content', noticeData.content);
		Array.from(files).forEach((file, i) => {
			dataForm.append(`files`, file, file.name);
		});
		axiosInterceptorInstance
			.post('/notice', dataForm, {
				withCredentials: true,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				console.log(res);
				setOpenAdd(false);
				setIsRefetching(true);
			});
	};

	return (
		<CustomModal
			setModalOpen={setOpenAdd}
			modalOpen={openAdd}
			buttonTitle={'추가하기'}
			files={files}
			setFiles={setFiles}
			handleClick={handleAddNotice}
		>
			<StyledHeader variant="h3">공지 추가</StyledHeader>

			<Warn>
				<Typography variant="body2">
					아래 내용을 입력하시고 추가 버튼을 눌러주세요.
				</Typography>
			</Warn>

			<InfoWrap>
				<TextField
					value={noticeData.title}
					fullWidth
					label="제목"
					name="title"
					required
					onChange={handleInputChange}
					sx={{
						marginBottom: '20px',
					}}
				/>

				<TextField
					label="내용"
					required
					name="content"
					value={noticeData.content}
					fullWidth
					multiline
					minRows={5}
					maxRows={5}
					onChange={handleInputChange}
					sx={{
						marginBottom: '20px',
					}}
				/>

				<div>
					<div>
						{
							// list of file names
							files?.map((file) => (
								<div key={file.name}>
									{/* // delete button */}
									<Button
										onClick={() => {
											setFiles((prevFiles) =>
												prevFiles.filter(
													(prevFile) => prevFile.name !== file.name
												)
											);
										}}
									>
										X
									</Button>
									{file.name} - {file.size} bytes
								</div>
							))
						}
					</div>
					<Button
						component="label"
						variant="contained"
						color="info"
						startIcon={<CloudUploadIcon />}
						sx={{
							marginTop: '10px',
						}}
					>
						파일 업로드
						<VisuallyHiddenInput
							type="file"
							onChange={uploadToClient}
							multiple
						/>
					</Button>
				</div>
			</InfoWrap>
		</CustomModal>
	);
};

export default NoticeAddModal;
