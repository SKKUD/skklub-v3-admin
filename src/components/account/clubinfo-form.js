import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
  Tabs,
  Tab,
  Unstable_Grid2 as Grid,
} from "@mui/material";

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

const ClubInfoForm = () => {
  const [values, setValues] = useState({
    clubName: "클럽 SKKULOL", //필수
    briefActivityDescription: "E-SPORTS", //필수
    activityDescription:
      "1. 열심히 참여하면 됩니다 2. 그냥 게임만 잘 하면 됩니다.", //필수
    clubDescription:
      "여기가 어떤 동아리냐면요, 페이커가 될 수 있게 해주는 동아리입니다^^", //필수
    establishDate: "2023",
    headLine: "명륜 게임 동아리입니다",
    mandatoryActivatePeriod: "4학기",
    memberAmount: "60",
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
            helperText="Please specify the first name"
            label="First name"
            name="firstName"
            onChange={handleChange}
            required
            value={values.firstName}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Last name"
            name="lastName"
            onChange={handleChange}
            required
            value={values.lastName}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            onChange={handleChange}
            required
            value={values.email}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            onChange={handleChange}
            type="number"
            value={values.phone}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Country"
            name="country"
            onChange={handleChange}
            required
            value={values.country}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            label="Select State"
            name="state"
            onChange={handleChange}
            required
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
        </Grid>
      </Grid>
    </>
  );
};

export default ClubInfoForm;
