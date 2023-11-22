import { Box, Typography, TextField, CardContent, Button } from '@mui/material';
import styled from '@emotion/styled';
import CustomModal from '../common/custom-modal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

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

const ThumbnailWrap = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`;

const ThumbailImage = styled(Image)`
	border-radius: 25%;
	margin-bottom: 10px;
`;

const NoticeInfoModal = ({ noticeId, handleClose, modalOpen }) => {
	const [noticeData, setNoticeData] = useState({});
	const [thumbnail, setThumbnail] = useState(null);

	useEffect(() => {
		axios.get(`/notice/prev/${noticeId}`).then((response) => {
			setNoticeData(response.data);
			if (response.data.thumbnail) {
				setThumbnail(response.data.thumbnail.url);
			} else {
				// default image
				setThumbnail('/assets/profile.jpeg');
			}
		});
	}, [noticeId]);

	const handleClick = () => {
		axios.post(`/notice/${noticeId}`, noticeData).then((response) => {
			handleClose();
		});
	};

	return (
		<CustomModal
			handleClose={handleClose}
			modalOpen={modalOpen}
			buttonTitle={'저장하기'}
		>
			<StyledHeader variant="h3">공지 내용</StyledHeader>

			<Warn>
				<Typography variant="body2">
					수정이 필요한 경우, 아래 수정하시고 저장 버튼을 눌러주세요.
				</Typography>
			</Warn>

			<InfoWrap>
				<ThumbnailWrap>
					<ThumbailImage
						src={thumbnail}
						alt="club image"
						width={200}
						height={200}
					/>
					{/* change image button */}
					<Button variant="contained" component="label">
						이미지 변경
						<input type="file" hidden />
					</Button>
				</ThumbnailWrap>

				<TextField
					value={noticeData.title}
					fullWidth
					label="제목"
					name="제목"
					required
					sx={{
						marginBottom: '20px',
					}}
				/>

				<TextField
					label="내용"
					name="내용"
					value={noticeData.content}
					fullWidth
					multiline
					minRows={5}
					maxRows={5}
					sx={{
						marginBottom: '20px',
					}}
				/>

				<TextField
					label="첨부파일"
					name="첨부파일"
					value={noticeData.uploadedFile}
					fullWidth
					multiline
					minRows={5}
					maxRows={5}
					sx={{
						marginBottom: '20px',
					}}
				/>
				
			</InfoWrap>
		</CustomModal>
	);
};

export default NoticeInfoModal;
