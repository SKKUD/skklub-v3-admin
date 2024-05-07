'use client';

import { useState } from 'react';
import {
	Box,
	Container,
	Stack,
	Grid,
	Typography,
	TextField,
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Settings = () => {
	const [showPassword1, setShowPassword1] = useState(false);
	const [showPassword2, setShowPassword2] = useState(false);

	const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
	const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

	const handleMouseDownPassword1 = (event) => {
		event.preventDefault();
	};

	const handleMouseDownPassword2 = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="lg">
					<Stack spacing={3}>
						<div>
							<Typography variant="h4">설정 페이지</Typography>
						</div>
						<div>
							{/* Change password */}
							<div>
								<Typography
									variant="h5"
									sx={{
										marginBottom: '10px',
									}}
								>
									유저네임 변경
								</Typography>
								<TextField required id="outlined-required" label="Required" />
							</div>
							<Button
								sx={{
									marginTop: '10px',
									marginBottom: '30px',
								}}
								variant="contained"
							>
								유저네임 변경
							</Button>
							<Typography
								variant="h5"
								sx={{
									marginBottom: '10px',
								}}
							>
								비밀번호 변경
							</Typography>
							<div>
								<FormControl
									sx={{ mt: 1, mb: 1, width: '25ch' }}
									variant="outlined"
								>
									<InputLabel htmlFor="outlined-adornment-password1">
										변경할 비밀번호
									</InputLabel>
									<OutlinedInput
										id="outlined-adornment-password1"
										type={showPassword1 ? 'text' : 'password'}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword1}
													onMouseDown={handleMouseDownPassword1}
													edge="end"
												>
													{showPassword1 ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										}
										label="Password"
									/>
								</FormControl>
							</div>
							<div>
								<FormControl
									sx={{ mt: 1, mb: 1, width: '25ch' }}
									variant="outlined"
								>
									<InputLabel htmlFor="outlined-adornment-password2">
										비밀번호 확인
									</InputLabel>
									<OutlinedInput
										id="outlined-adornment-password2"
										type={showPassword2 ? 'text' : 'password'}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword2}
													onMouseDown={handleMouseDownPassword2}
													edge="end"
												>
													{showPassword2 ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										}
										label="Password"
									/>
								</FormControl>
							</div>
							<Button
								variant="contained"
								sx={{
									marginTop: '10px',
									marginBottom: '30px',
								}}
							>
								비밀번호 변경
							</Button>
						</div>
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default Settings;
