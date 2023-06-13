"use client";

import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useSelection } from "@/hooks/use-selection";
import { CustomersTable } from "@/sections/customer/customers-table";
import { CustomersSearch } from "@/sections/customer/customers-search";
import { applyPagination } from "@/utils/apply-pagination";

const now = new Date();

const data = [
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

const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Customers | Devias Kit</title>
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
            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
