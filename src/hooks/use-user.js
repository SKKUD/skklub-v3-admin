const BASE_URL = process.env.NEXT_PUBLIC_DEV_URI;
import axios from "axios";
import { useEffect, useState } from "react";

export const useUserLoginApi = () => {
	const [res, setRes] = useState(null);
	const login = async (id, pw) => {
		axios
			.post(`/user/login?username=${id}&password=${pw}`)
			.then((response) => {
				localStorage.setItem(
					'token',
					response.headers.authorization.split(' ')[1]
				);
				localStorage.setItem('username', response.data.username);
				localStorage.setItem('role', response.data.role);
				setRes(true);
			})
			.catch((error) => {
				console.log(error);
				setRes(error);
			});
		return res;
	};

	return [login];
};

export const useUserLogoutApi = () => {
	const logout = () => {
		axios
			.get(`/oauth2/kakao/logout`, {
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