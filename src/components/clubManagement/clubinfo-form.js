import { useCallback, useState } from 'react';
import { TextField, Unstable_Grid2 as Grid } from '@mui/material';

const ClubInfoForm = ({ data, handleInputChange }) => {

	return (
		<>
			<Grid container spacing={3}>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="동아리 이름"
						name="clubName"
						onChange={handleInputChange}
						required
						value={data.name}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="분류"
						name="briefActivityDescription"
						helperText="활동 키워드를 입력해주세요"
						onChange={handleInputChange}
						required
						value={data.briefActivityDescription}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="활동 설명"
						name="activityDescription"
						helperText="동아리 활동에 대해 자세히 설명해주세요"
						onChange={handleInputChange}
						required
						multiline
						maxRows={6}
						value={data.activityDescription}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="동아리 설명"
						name="clubDescription"
						helperText="동아리에 대해 자세히 설명해주세요"
						onChange={handleInputChange}
						required
						multiline
						maxRows={6}
						value={data.clubDescription}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="설립연도"
						name="establishDate"
						onChange={handleInputChange}
						value={data.establishDate}
						placeholder="YYYY"
						type="number"
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="한줄 소개"
						name="headLine"
						onChange={handleInputChange}
						value={data.headLine}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="의무 활동 기간"
						name="mandatoryActivatePeriod"
						onChange={handleInputChange}
						value={data.mandatoryActivatePeriod}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="동아리 인원"
						name="memberAmount"
						onChange={handleInputChange}
						value={data.memberAmount}
						type="number"
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="정규 모임 시간"
						name="regularMeetingTime"
						onChange={handleInputChange}
						value={data.regularMeetingTime}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="동아리 방 위치"
						name="roomLocation"
						onChange={handleInputChange}
						value={data.roomLocation}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="관련 사이트 주소 1"
						name="webLink1"
						onChange={handleInputChange}
						value={data.webLink1}
					/>
				</Grid>
				<Grid xs={12} md={6}>
					<TextField
						fullWidth
						label="관련 사이트 주소 2"
						name="webLink2"
						onChange={handleInputChange}
						value={data.webLink2}
					/>
				</Grid>
				{/* <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Select State"
            name="state"
            onChange={handleChange}
            select
            SelectProps={{ native: true }}
            value={data.state}
          >
            {states.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid> */}
			</Grid>
		</>
	);
};

export default ClubInfoForm;
