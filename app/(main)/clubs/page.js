"use client";

import Head from "next/head";
import {
  Box,
  Container,
  Pagination,
  Stack,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { CompanyCard } from "@/components/companies/company-card";
import { CompaniesSearch } from "@/components/companies/companies-search";
import { useState } from "react";
import ClubInfoModal from "@/sections/clubs/modal-clubinfo";
import { CLUBS_DATA } from "@/constants/constants";
import MiniHeader from "@/components/common/mini-header";

export default function ClubsPage() {
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
            <MiniHeader label="동아리 관리" />
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
