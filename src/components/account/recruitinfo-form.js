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

const RecruitInfoForm = ({ values, setValues }) => {
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setValues((prevState) => ({
      ...prevState,
      recruit: {
        ...prevState.recruit,
        [name]: value,
      },
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
            value={values?.recruit.recruitStartAt || ""}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="모집 종료일"
            name="recruitEndAt"
            onChange={handleChange}
            value={values?.recruit.recruitEndAt || ""}
          />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="모집 문의처"
            name="recruitContact"
            onChange={handleChange}
            value={values?.recruit.recruitContact || ""}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="모집 링크"
            name="recruitWebLink"
            onChange={handleChange}
            value={values?.recruit.recruitWebLink || ""}
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
            value={values?.recruit.recruitQuota || ""}
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
            value={values?.recruit.recruitProcessDescription || ""}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default RecruitInfoForm;
