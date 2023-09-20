import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/solid/ArrowTopRightOnSquareIcon";
import ChevronUpDownIcon from "@heroicons/react/24/solid/ChevronUpDownIcon";
import {
  Box,
  Button,
  Divider,
  Drawer as MuiDrawer,
  Stack as MuiStack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { items } from "@/utils/sidebar-items";
import { SideNavItem } from "./side-nav-item";
import styled from "@emotion/styled";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const LogoContainer = styled(Box)`
  display: inline-flex;
  height: 32px;
  width: 32px;
`;

const ProfileContainer = styled(Box)`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 12px;
  font-family: "GmarketMediumSans";
`;

const Drawer = styled(MuiDrawer)`
  & .MuiDrawer-paper {
    background-color: rgba(38, 38, 38, 1);
    color: #fff;
    width: 280px;
    border-right: 1px solid rgba(220, 220, 220, 0.5);
  }
`;

const Stack = styled(MuiStack)`
  list-style: none;
  padding: 24px 16px;
  margin: 0;
`;

const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant={lgUp ? "permanent" : "temporary"}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
    >
      <Container>
        <Box sx={{ p: 3 }}>
          <LogoContainer component={Link} href="/account">
            <Image src="/assets/skklub.png" width={30} height={30} alt="logo" />
          </LogoContainer>
          <ProfileContainer>
            <div>
              <Typography color="inherit" variant="subtitle1">
                {localStorage.getItem("username")
                  ? localStorage.getItem("username")
                  : "알수없음"}
              </Typography>
              <Typography color="neutral.400" variant="body2">
                {localStorage.getItem("role")
                  ? localStorage.getItem("role").split("_")[1]
                  : "알수없음"}
              </Typography>
            </div>
            <SvgIcon fontSize="small" sx={{ color: "netral.500" }}>
              <ChevronUpDownIcon />
            </SvgIcon>
          </ProfileContainer>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Stack component="nav" spacing={0.5}>
          {items.map((item) => {
            const active = item.path ? pathname === item.path : false;

            return (
              <SideNavItem
                active={active.toString()}
                disabled={item.disabled}
                external={item.external}
                icon={item.icon}
                key={item.title}
                path={item.path}
                title={item.title}
              />
            );
          })}
        </Stack>
      </Container>
    </Drawer>
  );
};

export default SideNav;
