import { useCallback, useState } from "react";
import { TextField, Unstable_Grid2 as Grid } from "@mui/material";

// const states = [
//   {
//     value: "alabama",
//     label: "Alabama",
//   },
//   {
//     value: "new-york",
//     label: "New York",
//   },
//   {
//     value: "san-francisco",
//     label: "San Francisco",
//   },
//   {
//     value: "los-angeles",
//     label: "Los Angeles",
//   },
// ];

const ClubInfoForm = () => {
  const [values, setValues] = useState({
    clubName: "클럽 SKKULOL", //필수
    briefActivityDescription: "E-SPORTS", //필수
    activityDescription:
      "1. 열심히 참여하면 됩니다 2. 그냥 게임만 잘 하면 됩니다.", //필수
    clubDescription:
      "여기가 어떤 동아리냐면요, 페이커가 될 수 있게 해주는 동아리입니다^^", //필수
    establishDate: 2023,
    headLine: "명륜 게임 동아리입니다",
    mandatoryActivatePeriod: "4학기",
    memberAmount: 60,
    regularMeetingTime: "Thursday 19:00",
    roomLocation: "학생회관 80210",
    webLink1: "www.skklol.edu",
    webLink2: "skklol.com",
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="동아리 이름"
            name="clubName"
            onChange={handleChange}
            required
            value={values.clubName}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="분류"
            name="briefActivityDescription"
            helperText="활동 키워드를 입력해주세요"
            onChange={handleChange}
            required
            value={values.briefActivityDescription}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="활동 설명"
            name="activityDescription"
            helperText="동아리 활동에 대해 자세히 설명해주세요"
            onChange={handleChange}
            required
            multiline
            maxRows={6}
            value={values.activityDescription}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="동아리 설명"
            name="clubDescription"
            helperText="동아리에 대해 자세히 설명해주세요"
            onChange={handleChange}
            required
            multiline
            maxRows={6}
            value={values.clubDescription}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="설립연도"
            name="establishDate"
            onChange={handleChange}
            value={values.establishDate}
            placeholder="YYYY"
            type="number"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="한줄 소개"
            name="headLine"
            onChange={handleChange}
            value={values.headLine}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="의무 활동 기간"
            name="mandatoryActivatePeriod"
            onChange={handleChange}
            value={values.mandatoryActivatePeriod}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="동아리 인원"
            name="memberAmount"
            onChange={handleChange}
            value={values.memberAmount}
            type="number"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="정규 모임 시간"
            name="regularMeetingTime"
            onChange={handleChange}
            value={values.regularMeetingTime}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="동아리 방 위치"
            name="roomLocation"
            onChange={handleChange}
            value={values.roomLocation}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="관련 사이트 주소 1"
            name="webLink1"
            onChange={handleChange}
            value={values.webLink1}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="관련 사이트 주소 2"
            name="webLink2"
            onChange={handleChange}
            value={values.webLink2}
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
            value={values.state}
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
