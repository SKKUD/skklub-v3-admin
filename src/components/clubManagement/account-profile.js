import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Divider,
} from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRef } from 'react';

const ProfileCardContent = styled(CardContent)`
	display: flex;
	align-items: center;
	justify-content: center;
	> img {
		border-radius: 20px;
	}
`;

export const AccountProfile = () => {
	const inputRef = useRef(null);

	const handleFileUploadClick = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleFileUpload = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			if (confirm('선택한 사진으로 동아리 썸네일을 수정하시겠습니까?')) {
				//submit
			}
		}
	};

	return (
		<Card>
			<ProfileCardContent>
				<Image
					src="/assets/profile.jpeg"
					alt="club image"
					width={220}
					height={220}
				/>
			</ProfileCardContent>
			<Divider />

			<CardActions>
				<Button fullWidth variant="text" onClick={handleFileUploadClick}>
					Upload picture
				</Button>
				<input
					ref={inputRef}
					type="file"
					accept="image/*"
					hidden
					onChange={handleFileUpload}
				/>
			</CardActions>
		</Card>
	);
};
