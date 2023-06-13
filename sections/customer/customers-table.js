"use client";
import React from "react";
import {
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Modal,
} from "@mui/material";
import styled from "@emotion/styled";
import ClubInfoModal from "./modal-clubinfo";

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;
  const [open, setOpen] = React.useState(false);
  const [clubId , setClubId] = React.useState('');
  const handleOpen = (cid) => {
    setOpen(true);
    setClubId(cid);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>상태</TableCell>
                <TableCell>캠퍼스</TableCell>
                <TableCell>모임명</TableCell>
                <TableCell>대분류</TableCell>
                <TableCell>중분류</TableCell>
                <TableCell>소분류</TableCell>
                <TableCell>대표자</TableCell>
                <TableCell>연락처</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => {
                const isSelected = selected.includes(customer.id);

                return (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={isSelected}
                    onClick={() => handleOpen(customer.id)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(customer.id);
                          } else {
                            onDeselectOne?.(customer.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      {customer.state.public ? "공개" : "비공개"}/
                      {customer.state.revise ? "수정가능" : "수정불가능"}
                    </TableCell>
                    <TableCell>{customer.campus}</TableCell>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">
                          {customer.cname}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{customer.category1}</TableCell>
                    <TableCell>{customer.category2}</TableCell>
                    <TableCell>{customer.category3}</TableCell>
                    <TableCell>{customer.president_name}</TableCell>
                    <TableCell>{customer.president_contact}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
        <TablePagination
          component="div"
          count={count}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ClubInfoModal cid={clubId} />
      </Modal>
    </>
  );
};
