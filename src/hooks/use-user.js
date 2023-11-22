import axios from "axios";
import { useState } from "react";
const JWT_EXPIRY_TIME = (1 / 2) * 3600 * 1000;

export const useUserLoginApi = () => {
  const refresh = async () => {
    let token = "";
    const refreshToken = localStorage.getItem("refresh").split(" ")[1];
    console.log(axios.defaults);
    axios.get(`/refresh?${refreshToken}`).then((response) => {
      token = response.headers["authorization"];
    });
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Authorization"] = token;
  };

  const login = async (id, pw) => {
    let token = "";
    await axios
      .post(`/user/login?username=${id}&password=${pw}`)
      .then((response) => {
        localStorage.setItem("refresh", response.headers["refresh-token"]);
        localStorage.setItem("userid", response.data.id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);
        token = response.headers["authorization"];

        setTimeout(refresh, JWT_EXPIRY_TIME - 60000);
      })
      .catch((error) => {
        console.log(error);
        alert("아이디나 비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      });
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Authorization"] = token;
  };

  return { login, refresh };
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
