const BASE_URL = process.env.NEXT_PUBLIC_DEV_URI;
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axiosInterceptorInstance from '../../axios/axiosInterceptorInstance';
import axios from 'axios';

export const useUserLoginApi = () => {
	const router = useRouter();
	const login = (id, pw) => {
		axios
			.post(`/user/login?username=${id}&password=${pw}`)
			.then((response) => {
				console.log(response.data);
				localStorage.setItem('key', response.headers['authorization']);
				localStorage.setItem('refresh', response.headers['refresh-token']);
				localStorage.setItem('userid', response.data.id);
				localStorage.setItem('username', response.data.username);
				localStorage.setItem('role', response.data.role);
				return response.data.role;
			})
			.then((role) => {
				if (
					role == 'ROLE_MASTER' ||
					'ROLE_ADMIN_SUWON_CENTRAL' ||
					'ROLE_ADMIN_SEOUL_CENTRAL'
				) {
					router.push('/clubs');
				} else {
					router.push('/account');
				}
			})
			.catch((error) => {
				console.log(error);
				alert('아이디나 비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
			});
	};

	return [login];
};

export const useUserRefreshApi = () => {
	const router = useRouter();
	const auth = localStorage.getItem('key');
	const refreshToken = localStorage.getItem('refresh');
	const refresh = () => {
		axiosInterceptorInstance
			.get(`/refresh`, { Authorization: auth, 'Refresh-Token': refreshToken })
			.then((response) => {
				localStorage.setItem('key', response.headers['authorization']);
			})
			.catch((error) => {
				console.log(error);
				alert('세션이 만료되었습니다. 다시 로그인해주세요.');
				router.push('/');
			});
	};

	return [refresh];
};

export const useUserLogoutApi = () => {
	const logout = () => {
		axiosInterceptorInstance
			.post(`/user/logout`, {
				withCredentials: true,
			})
			.then((response) => {
				console.log(response);
				localStorage.clear();
				window.location.href = '/';
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return [logout];
};

export const useUserEditApi = () => {
	const editUser = ({ name, pw, contact }) => {
		axiosInterceptorInstance
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
		const userid = localStorage.getItem('userid');
		const auth = localStorage.getItem('key');
		if (userid) {
			const getClubInfo = async () => {
				await axiosInterceptorInstance
					.get(`/club/my`, { withCredentials: true })
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

export const useClubInfoApiAdmin = (id) => {
	const [clubInfo, setClubInfo] = useState(null);
	useEffect(() => {
		if (id) {
			const getClubInfo = async () => {
				await axiosInterceptorInstance
					.get(`/club/${id}`, { withCredentials: true })
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

	return [clubInfoAdmin];
};

export const useEditClubInfoApi = () => {
	const userid = localStorage.getItem('userid');
	const editClubInfo = (values) => {
		if (values.name === '') {
			alert('동아리 이름을 입력해주세요.');
		} else if (values.briefActivityDescription === '') {
			alert('분류를 입력해주세요.');
		} else if (values.activityDescription === '') {
			alert('활동 설명을 입력해주세요.');
		} else if (values.clubDescription === '') {
			alert('동아리 설명을 입력해주세요.');
		} else {
			if (userid) {
				axiosInterceptorInstance
					.patch(
						`/club/${userid}`,
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

	return [editClubInfo];
};

export const useEditClubInfoApiAdmin = () => {
	const editClubInfoAdmin = (id, values) => {
		if (values.name === '') {
			alert('동아리 이름을 입력해주세요.');
		} else if (values.briefActivityDescription === '') {
			alert('분류를 입력해주세요.');
		} else if (values.activityDescription === '') {
			alert('활동 설명을 입력해주세요.');
		} else if (values.clubDescription === '') {
			alert('동아리 설명을 입력해주세요.');
		} else {
			if (id) {
				let data = new FormData();
				data.append('clubName', values.name);
				data.append(
					'briefActivityDescription',
					values.briefActivityDescription
				);
				data.append('activityDescription', values.activityDescription || '');
				data.append('clubDescription', values.clubDescription || '');
				data.append('establishDate', values.establishDate || '');
				data.append('headLine', values.headLine || '');
				data.append(
					'mandatoryActivatePeriod',
					values.mandatoryActivatePeriod || ''
				);
				data.append('memberAmount', values.memberAmount || '');
				data.append('regularMeetingTime', values.regularMeetingTime || '');
				data.append('roomLocation', values.roomLocation || '');
				data.append('webLink1', values.webLink1 || '');
				data.append('webLink2', values.webLink2 || '');

				axiosInterceptorInstance
					.patch(`/club/${id}`, data, {
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					})
					.then((res) => {
						alert('정보가 수정되었습니다.');
						return res;
					})
					.catch((error) => {
						alert('정보 수정에 실패했습니다.');
						return error;
					});
			}
		}
	};

	return [editClubInfoAdmin];
};

export const useClubRegisterApi = () => {
	const registerClub = (values) => {
		if (values.name === '') {
			alert('동아리 이름을 입력해주세요.');
		} else if (values.briefActivityDescription === '') {
			alert('분류를 입력해주세요.');
		} else if (values.activityDescription === '') {
			alert('활동 설명을 입력해주세요.');
		} else if (values.clubDescription === '') {
			alert('동아리 설명을 입력해주세요.');
		} else {
			if (userid) {
				axiosInterceptorInstance
					.post(
						`/club`,
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

	return [registerClub];
};

export const useDeleteClubApi = () => {
	const deleteClub = (id) => {
		axiosInterceptorInstance
			.delete(`/club/${id}`)
			.then((res) => {
				return res;
			})
			.catch((error) => {
				alert('동아리 삭제에 실패했습니다.');
				return error;
			});
	};

	return [deleteClub];
};
