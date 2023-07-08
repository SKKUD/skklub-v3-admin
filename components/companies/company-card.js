import PropTypes from "prop-types";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

export const CompanyCard = (props) => {
  const { club } = props;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Avatar src={"/vercel.svg"} variant="square" />
        </Box>
        <Typography align="center" gutterBottom variant="h5">
          {club.cname}
        </Typography>
        <Typography align="center" variant="body1">
          {`${club.category1} / ${club.category2} / ${club.category3}`}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack alignItems="center" direction="row" spacing={1}>
          {/* <SvgIcon color="action" fontSize="small">
            <ClockIcon />
          </SvgIcon>
          <Typography color="text.secondary" display="inline" variant="body2">
            Updated 2hr ago
          </Typography> */}
        </Stack>
        <Stack alignItems="center" direction="row" spacing={1}>
          <Typography color="text.secondary" display="inline" variant="h6">
            {club.campus}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
