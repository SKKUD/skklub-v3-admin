"use client";

import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { Box, Container, Stack } from "@mui/material";
import { useSelection } from "@/hooks/use-selection";
import { CustomersTable } from "@/sections/customer/customers-table";
import { CustomersSearch } from "@/sections/customer/customers-search";
import { applyPagination } from "@/utils/apply-pagination";
import MiniHeader from "@/components/common/mini-header";
import { CLUBS_DATA } from "@/constants/constants";

const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(CLUBS_DATA, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

export default function NoticesPage() {
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
            <MiniHeader label={"공지 관리"} />
            <CustomersSearch />
            <CustomersTable
              count={CLUBS_DATA.length}
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
}
