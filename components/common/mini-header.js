import { Button, Stack, SvgIcon, Typography } from "@mui/material";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";

export default function MiniHeader({ label }) {
  return (
    <Stack direction="row" justifyContent="space-between" spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h4">{label}</Typography>
      </Stack>

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
    </Stack>
  );
}
