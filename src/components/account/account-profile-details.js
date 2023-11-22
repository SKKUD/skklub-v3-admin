import { useCallback, useEffect, useState } from "react";
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
import ClubInfoForm from "./clubinfo-form";
import RecruitInfoForm from "./recruitinfo-form";
import { useClubInfoApi, useEditClubInfoApi } from "@/hooks/use-user";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const AccountProfileDetails = () => {
  const [tabvalue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // 동아리 정보, 모집 정보 state
  const [clubInfo] = useClubInfoApi();
  const [infoValues, setInfoValues] = useState({});
  useEffect(() => {
    setInfoValues(clubInfo);
  }, [clubInfo]);

  // 수정 submit
  const [editClubInfo, editRecruitInfo] = useEditClubInfoApi();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (tabvalue === 0) {
      editClubInfo(infoValues);
    } else if (tabvalue === 1) {
      editRecruitInfo(infoValues);
    }
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="자유롭게 정보를 수정해보세요!" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                margin: "0 15px",
              }}
            >
              <Tabs
                value={tabvalue}
                onChange={handleTabChange}
                aria-label="basic tabs example"
              >
                <Tab label="동아리 정보" />
                <Tab label="모집 정보" />
              </Tabs>
            </Box>
            <CustomTabPanel value={tabvalue} index={0}>
              <ClubInfoForm values={infoValues} setValues={setInfoValues} />
            </CustomTabPanel>
            <CustomTabPanel value={tabvalue} index={1}>
              <RecruitInfoForm values={infoValues} setValues={setInfoValues} />
            </CustomTabPanel>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end", padding: "15px" }}>
          <Button variant="contained" onClick={handleSubmit}>
            수정사항 저장
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
