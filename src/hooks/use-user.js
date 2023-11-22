import axios from "axios";
import { useState } from "react";

export const useUserLoginApi = () => {
  const [accessToken, setAccess] = useState("");
  const login = async (id, pw) => {
    axios
      .post(`/user/login?username=${id}&password=${pw}`)
      .then((response) => {
        localStorage.setItem("refresh", response.headers["refresh-token"]);
        localStorage.setItem("userid", response.data.id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);
        setAccess(response.headers["authorization"]);
      })
      .catch((error) => {
        console.log(error);
        alert("아이디나 비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      });

    return accessToken;
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
