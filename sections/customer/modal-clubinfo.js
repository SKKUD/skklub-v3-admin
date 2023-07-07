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
  Input,
} from "@mui/material";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import SaveAsIcon from "@mui/icons-material/SaveAs";

const StyledBox = styled(Box)({
  position: "absolute",
  top: "50px",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "800px",
  backgroundColor: "#262626",
  borderRadius: "10px",
  boxShadow: 24,
  padding: "20px",

  "@media (max-width: 425px)": {
    width: "90%",
  },
});

const StyledHeader = styled(Typography)({
  width: "90%",
  margin: "20px auto",
  color: "#FFF",
  fontSize: "28px",
  display: "flex",
  "& > b": {
    color: "#80a4ff",
  },
});

const CloseBtn = styled(Button)`
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  font-weight: 200;
  border-radius: 36px;
  width: 60px;
  height: 60px;
  color: #888;
  text-align: center;
`;

const Warn = styled(Box)`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;
  color: #666;
`;

const InfoWrap = styled(Box)`
  width: 90%;
  margin: 50px auto;
  padding: 50px;
  border-radius: 16px;
  background-color: #303030;
  position: relative;
`;
const Title = styled(Box)`
  color: #fff;
  background-color: #80a4ff;
  width: 180px;
  height: 36px;
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  border-radius: 100px;
`;

const Label = styled(Box)`
  color: #80a4ff;
  padding: 5px;
  width: 150px;
  height: 44px;
  line-height: 35px;
  border-radius: 10px;
`;

const SaveBtn = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 60px;
`;

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
  update: "2023-06-12 18:43",
};

const ClubInfoModal = ({ cid, handleClose }) => {
  console.log(cid);

  return (
    <StyledBox>
      <CloseBtn onClick={handleClose}>
        <CloseIcon />
      </CloseBtn>
      <StyledHeader variant="h3">
        <b>{clubInfo.cname}</b>의 상세 정보
      </StyledHeader>
      <Warn>정보 수정시, 하단의 저장 버튼을 눌러주세요.</Warn>
      <InfoWrap>
        <Title>
          <Typography variant="h6" component="p" style={{ lineHeight: "36px" }}>
            기본 정보
          </Typography>
        </Title>
        <Box sx={{ display: "flex" }}>
          <Label>동아리명</Label>
          <Input fullWidth value={clubInfo.cname} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>대분류</Label>
          <Input fullWidth value={clubInfo.category1} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>중분류</Label>
          <Input fullWidth value={clubInfo.category2} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>소분류</Label>
          <Input fullWidth value={clubInfo.category3} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>캠퍼스</Label>
          <Input fullWidth value={clubInfo.campus} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>설립연도</Label>
          <Input fullWidth value={clubInfo.estab_year} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>최근 업데이트</Label>
          <Input
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            value={clubInfo.update}
          />
        </Box>
      </InfoWrap>
      <InfoWrap>
        <Title>
          <Typography variant="h6" component="p" style={{ lineHeight: "36px" }}>
            모임 정보
          </Typography>
        </Title>
        <Box sx={{ display: "flex" }}>
          <Label>소개글</Label>
          <Input fullWidth multiline value={clubInfo.intro_text} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>핵심 소개문구</Label>
          <Input fullWidth value={clubInfo.intro_sentence} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>활동 내용</Label>
          <Input fullWidth multiline value={clubInfo.activity_info} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>모임 시간</Label>
          <Input fullWidth value={clubInfo.meeting_time} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>모임 장소</Label>
          <Input fullWidth value={clubInfo.activity_location} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>활동 인원</Label>
          <Input fullWidth value={clubInfo.activity_num} />
        </Box>
      </InfoWrap>
      <InfoWrap>
        <Title>
          <Typography variant="h6" component="p" style={{ lineHeight: "36px" }}>
            리쿠르팅 정보
          </Typography>
        </Title>
        <Box sx={{ display: "flex" }}>
          <Label>모집 시기</Label>
          <Input fullWidth value={clubInfo.recruit_season} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>의무 활동 기간</Label>
          <Input fullWidth value={clubInfo.activity_period} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>모집 방식</Label>
          <Input fullWidth value={clubInfo.recruit_process} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>모집 인원</Label>
          <Input fullWidth value={clubInfo.recruit_num} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>리쿠르팅 사이트</Label>
          <Input fullWidth value={clubInfo.recruit_site} />
        </Box>
      </InfoWrap>
      <InfoWrap>
        <Title>
          <Typography variant="h6" component="p" style={{ lineHeight: "36px" }}>
            연락처/사이트
          </Typography>
        </Title>
        <Box sx={{ display: "flex" }}>
          <Label>대표자 이름</Label>
          <Input fullWidth value={clubInfo.president_name} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>대표자 연락처</Label>
          <Input fullWidth value={clubInfo.president_contact} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>웹페이지 1</Label>
          <Input fullWidth value={clubInfo.website_link} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>웹페이지 2</Label>
          <Input fullWidth value={clubInfo.website_link2} />
        </Box>
      </InfoWrap>
      <InfoWrap>
        <Title>
          <Typography variant="h6" component="p" style={{ lineHeight: "36px" }}>
            계정 정보
          </Typography>
        </Title>
        <Box sx={{ display: "flex" }}>
          <Label>계정 ID</Label>
          <Input
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            value={clubInfo.cid}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Label>계정 식별코드</Label>
          <Input
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            value={clubInfo.cid}
          />
        </Box>
      </InfoWrap>
      <SaveBtn variant="contained">
        <SaveAsIcon /> 저장
      </SaveBtn>
    </StyledBox>
  );
};

export default ClubInfoModal;
