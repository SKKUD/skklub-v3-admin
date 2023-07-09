"use client";

import Head from "next/head";
import { Box, Container, Stack, Typography } from "@mui/material";
import { SettingsNotifications } from "@/sections/settings/settings-notifications";
import { SettingsPassword } from "@/sections/settings/settings-password";

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings | Devias Kit</title>
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
            <Typography variant="h4">Settings</Typography>
            <SettingsNotifications />
            <SettingsPassword />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
