"use client";

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
} from "@mui/material";
import ClubInfoModal from "../clubs/modal-clubinfo";
import { useState } from "react";
import NoticeInfoModal from "./NoticeInfoModal";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [clubId, setClubId] = useState("");
  const handleOpen = (cid) => {
    setModalOpen(true);
    setClubId(cid);
  };
  const handleClose = () => setModalOpen(false);

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
                <TableCell>NO</TableCell>
                <TableCell>제목</TableCell>
                <TableCell>글쓴이</TableCell>
                <TableCell>작성일지</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((notice) => {
                const isSelected = selected.includes(notice.no);

                return (
                  <TableRow
                    hover
                    key={notice.no}
                    selected={isSelected}
                    onClick={() => handleOpen(notice.no)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(notice.no);
                          } else {
                            onDeselectOne?.(notice.no);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>{notice.no}</TableCell>
                    <TableCell>{notice.title}</TableCell>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">
                          {notice.writer}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{notice.date}</TableCell>
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
      <NoticeInfoModal
        cid={clubId}
        handleClose={handleClose}
        modalOpen={modalOpen}
      />
    </>
  );
};
