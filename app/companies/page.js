"use client";

import Head from "next/head";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
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

const CLUBS = [
  {
    id: "5e887ac47eed253091be10cb",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
  {
    id: "5e86809283e28b96d2d38537",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
  {
    id: "5e86805e2bafd54f66cc95c3",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
  {
    id: "5e887a1fbefd7938eea9c981",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
  {
    id: "5e887d0b3d090c1b8f162003",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
  {
    id: "5e88792be2d4cfb4bf0971d9",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
  {
    id: "5e8877da9a65442b11551975",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
  {
    id: "5e8680e60cba5019c5ca6fda",
    cname: "라켓챌린지",
    state: {
      public: true,
      revise: true,
    },
    authority: 3,
    category1: "중앙동아리",
    category2: "스포츠",
    category3: "배드민턴",
    campus: "명륜",
    logo_path: "/vercel.svg",
    president_name: "송호진",
    president_contact: "010-3083-5418",
  },
];

export default function CompaniesPage() {
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
              {CLUBS.map((club) => (
                <Grid xs={12} md={6} lg={4} key={club.id}>
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
      </Box>
    </>
  );
}
