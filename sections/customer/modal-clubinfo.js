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
  Button,
} from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
});

const clubInfo = {
  cid: 63,
  cname: "라켓챌린지",
  campus: "명륜",
  authority: 3,
  category1: "중앙동아리",
  category2: "스포츠",
  category3: "배드민턴",
  logo_path: "63.jpg",
  estab_year: "2017",
  intro_text:
    "라켓챌린지는 성균관대학교 중앙 배드민턴 동아리로, 매주 화/목 6시~9시에 학교 주변 30분 내외 거리의 체육관 2곳에서 일일입장을 통해 배드민턴을 칩니다! 현재는 주로 수유역 근방에 있는 오동근린공원 실내배드민턴장에서 운동하고 있습니다 :D\r\n \r\n 단순히 동아리원들끼리 배드민턴만을 치는 것이 아닌, 타대학과의 교류전/자체대회/MT와 같은 다채로운 활동들도 준비되어 있습니다.\r\n \r\n 스포츠는 사람과 사람을 이어주는 훌륭한 취미활동이며, 그 중 배드민턴은 일상생활에서 우리가 가장 쉽고 편하게 접할 수 있는 것이 특징입니다!\r\n \r\n 배드민턴이라는 공통의 관심사에서 시작해 좋은 친구들을 만날 수 있는 동아리, 라켓챌린지입니다! 나이, 성별 모두 골고루 분포하니, 부담 갖지 말고 지원해주세요!",
  recruit_num: "20명 내외",
  activity_num: "40",
  meeting_time: "화 (18:00~21:00)\r\n목 (18:00~21:00)",
  recruit_site: "",
  website_link: "https://www.instagram.com/racketchallenge/",
  activity_info:
    "주요 활동인 화/목 배드민턴은 필수 참여가 아닌, 편할 때 나오고 바쁘면 쉬어도 되는 자유 참여입니다!\r\n \r\n 아래의 일정에는 변동사항이 생길 수 있습니다.",
  website_link2: "",
  intro_sentence: "당신의 인생의 터닝포인트. 그것은 바로 배드민터닝!",
  president_name: "송호진",
  president_contact: "010-3083-5418",
  recruit_season: "매학기",
  activity_period: "없음",
  recruit_process: "서류",
  activity_location: "학생회관 80117",
};

const ClubInfoModal = ({ cid }) => {
  console.log(cid);
  return (
    <StyledBox>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </StyledBox>
  );
};

export default ClubInfoModal;
