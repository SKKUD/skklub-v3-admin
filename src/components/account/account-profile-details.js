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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const AccountProfileDetails = () => {
  const [tabvalue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

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
              Item One
            </CustomTabPanel>
            <CustomTabPanel value={tabvalue} index={1}>
              Item Two
            </CustomTabPanel>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Save details</Button>
        </CardActions>
      </Card>
    </form>
  );
};
