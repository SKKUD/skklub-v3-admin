"use client";

import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { AccountProfile } from "@/components/account/account-profile";
import { AccountProfileDetails } from "@/components/account/account-profile-details";

const Account = () => {
  return (
    <>
      <Head>
        <title>내 계정 관리</title>
      </Head>
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
              <Typography variant="h4">
                <b style={{ color: "#80A4FF" }}>
                  {"[ "}
                  {localStorage.getItem("username")
                    ? localStorage.getItem("username")
                    : "동아리"}
                  {" ]  "}
                </b>
                정보 수정
              </Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  <AccountProfile />
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  <AccountProfileDetails />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Account;
