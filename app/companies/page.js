"use client";

import Head from "next/head";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { CompanyCard } from "@/components/companies/company-card";
import { CompaniesSearch } from "@/components/companies/companies-search";
import { useState } from "react";
import ClubInfoModal from "@/sections/customer/modal-clubinfo";
import { CLUBS_DATA } from "@/constants/constants";

export default function CompaniesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);
  const [clubId, setClubId] = useState("");
  const handleOpen = (cid) => {
    setModalOpen(true);
    setClubId(cid);
  };
  return (
    <>
      <Head>
        <title>Companies | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">동아리 관리</Typography>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <CompaniesSearch />
            <Grid container spacing={3}>
              {CLUBS_DATA.map((club) => (
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  key={club.id}
                  onClick={() => handleOpen(club.id)}
                >
                  <CompanyCard club={club} />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination count={3} size="small" />
            </Box>
          </Stack>
        </Container>

        <ClubInfoModal
          cid={clubId}
          handleClose={handleClose}
          modalOpen={modalOpen}
        />
      </Box>
    </>
  );
}
