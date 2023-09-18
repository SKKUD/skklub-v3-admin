const BASE_URL = process.env.NEXT_PUBLIC_DEV_URI;
import axios from "axios";

export const useUserLoginApi = () => {
  const login = (id, pw) => {
    axios
      .post(BASE_URL + `/user/login?username=${id}&password=${pw}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [login];
};

export const useUserLogoutApi = () => {
  const logout = () => {
    axios
      .get(BASE_URL + `/oauth2/kakao/logout`, {
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
      .post(BASE_URL + `/user/0?password=${pw}&name=${name}&contact=${contact}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [editUser];
};
