import { useCallback, useState } from "react";
import { TextField, Unstable_Grid2 as Grid } from "@mui/material";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
  {
    value: "los-angeles",
    label: "Los Angeles",
  },
];

const RecruitInfoForm = () => {
  const [values, setValues] = useState({
    recruitStartAt: "yyyy-MM-ddTHH:mm(T는 날짜랑 시간 구분용 문자)",
    recruitEndAt: "2012-06-02T14:04(상시모집은 시작일 종료일 null or No Field)",
    recruitQuota: "00명 || 최대한 많이 뽑을 예정", //필수
    recruitProcessDescription: "1. 어쩌구 2. 어쩌구 AnyString", //필수
    recruitContact: "010 - 1234 - 1234 || 인스타 아이디",
    recruitWebLink: "www.xxx.com || or any String",
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
            label="모집 시작일"
            name="recruitStartAt"
            onChange={handleChange}
            value={values.recruitStartAt}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="모집 종료일"
            name="recruitEndAt"
            onChange={handleChange}
            value={values.recruitEndAt}
          />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="모집 문의처"
            name="recruitContact"
            onChange={handleChange}
            value={values.recruitContact}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="모집 링크"
            name="recruitWebLink"
            onChange={handleChange}
            value={values.recruitWebLink}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="모집 정원"
            name="recruitQuota"
            onChange={handleChange}
            required
            maxRows={6}
            value={values.recruitQuota}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="모집 방식"
            name="recruitProcessDescription"
            helperText="모집 방식에 대해 자세히 설명해주세요"
            onChange={handleChange}
            required
            multiline
            maxRows={6}
            value={values.recruitProcessDescription}
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

export default RecruitInfoForm;
