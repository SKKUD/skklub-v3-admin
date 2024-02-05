const BASE_URL = process.env.NEXT_PUBLIC_DEV_URI;
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useUserLoginApi = () => {
  const login = async (id, pw) => {
    axios
      .post(`/user/login?username=${id}&password=${pw}`)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("key", response.headers["authorization"]);
        localStorage.setItem("refresh", response.headers["refresh-token"]);
        localStorage.setItem("userid", response.data.id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);
      }).then(()=>{
        router.push("/account");
      })
      .catch((error) => {
        console.log(error);
        alert("아이디나 비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      });
  };

  return [login];
};

export const useUserRefreshApi = () => {
  const router = useRouter();
  const auth = localStorage.getItem("key");
  const refreshToken = localStorage.getItem("refresh");
  const refresh = async () => {
    axios
      .get(`/refresh`, { Authorization: auth, "Refresh-Token": refreshToken })
      .then((response) => {
        localStorage.setItem("key", response.headers["authorization"]);
      })
      .catch((error) => {
        console.log(error);
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
        router.push("/");
      });
  };

  return [refresh];
};



export const useUserLogoutApi = () => {
  const name = localStorage.getItem("username")
  const logout = () => {
    axios
      .get(`/user/logout?username=${name}&password=${pw}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

	return [logout];
};

export const useUserEditApi = () => {
	const editUser = ({ name, pw, contact }) => {
		axios
			.post(`/user/0?password=${pw}&name=${name}&contact=${contact}`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return [editUser];
};

export const useClubInfoApi = () => {
  const [clubInfo, setClubInfo] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      const getClubInfo = async () => {
        await axios
          .get(BASE_URL + `/club/103`)
          .then((response) => {
            // console.log(response.data);
            setClubInfo(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      getClubInfo();
    }
  }, []);

  return [clubInfo];
};

export const useEditClubInfoApi = () => {
  const editClubInfo = (values) => {
    console.log(values.name);
    if (values.name === "") {
      alert("동아리 이름을 입력해주세요.");
    } else if (values.briefActivityDescription === "") {
      alert("분류를 입력해주세요.");
    } else if (values.activityDescription === "") {
      alert("활동 설명을 입력해주세요.");
    } else if (values.clubDescription === "") {
      alert("동아리 설명을 입력해주세요.");
    } else {
      if (localStorage.getItem("userid")) {
        const id = localStorage.getItem("userid");
        axios
          .patch(
            BASE_URL + `/club/103`,
            {
              clubName: values.name,
              briefActivityDescription: values.briefActivityDescription,
              activityDescription: values.activityDescription,
              clubDescription: values.clubDescription,
              establishDate: values.establishDate,
              headLine: values.headLine,
              mandatoryActivatePeriod: values.mandatoryActivatePeriod,
              memberAmount: values.memberAmount,
              regularMeetingTime: values.regularMeetingTime,
              roomLocation: values.roomLocation,
              webLink1: values.webLink1,
              webLink2: values.webLink2,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      }
    }
  };

  const editRecruitInfo = (values) => {
    const recruit = values.recruit;
    console.log(recruit);
    if (recruit.recruitQuota === "") {
      alert("모집 정원을 입력해주세요.");
    } else if (recruit.recruitProcessDescription === "") {
      alert("모집 방식을 입력해주세요.");
    } else {
      if (localStorage.getItem("userid")) {
        const id = localStorage.getItem("userid");
        axios
          .patch(BASE_URL + `/users/${id}`, {
            recruitStartAt: recruit.recruitStartAt,
            recruitEndAt: recruit.recruitEndAt,
            recruitQuota: recruit.recruitQuota,
            recruitProcessDescription: recruit.recruitProcessDescription,
            recruitContact: recruit.recruitContact,
            recruitWebLink: recruit.recruitWebLink,
          })
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      }
    }
  };
  return [editClubInfo, editRecruitInfo];
};