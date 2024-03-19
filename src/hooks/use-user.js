import axios from 'axios';
import { useState } from 'react';

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
