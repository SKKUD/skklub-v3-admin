"use client";

import { useCallback, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link as MUILink,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { LoginLayout } from "@/layouts/loginLayout";
import { useUserLoginApi } from "@/hooks/use-user";
import { useSetRecoilState } from "recoil";
import { accessToken } from "@/utils/recoil/atoms";

const Home = () => {
  const router = useRouter();
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const [login] = useUserLoginApi();
  const setAccessToken = useSetRecoilState(accessToken);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(id, pw).then((token) => {
      setAccessToken(token);
      router.push("/account");
    });
  };

  return (
    <LoginLayout>
      <Head>
        <title>SKKLUB 어드민</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">SKKLUB ADMIN</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <MUILink
                  component={Link}
                  href="/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </MUILink>
              </Typography>
            </Stack>
            <Tabs sx={{ mb: 3 }} value="ID">
              <Tab label="Login" value="ID" />
            </Tabs>

            <form>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="ID"
                  name="ID"
                  onChange={(e) => setID(e.target.value)}
                  type="ID"
                  value={id}
                  inputProps={{ maxLength: 14 }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  onChange={(e) => setPW(e.target.value)}
                  type="password"
                  value={pw}
                  inputProps={{ maxLength: 14 }}
                />
              </Stack>

              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                Continue
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </LoginLayout>
  );
};

export default Home;
