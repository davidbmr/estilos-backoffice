import { AppThunk } from "../../store";
import { authApi } from "../../../connections";
import { isLoading, setLogin } from "./authSlice";
import axios from "axios";
import { url } from "@/connections/mainApi";

export const getUser = (payload: string): AppThunk => {
	return async (dispatch) => {
		try {
			const {
				data: { data },
			} = await axios.post(`${url}/auth`, payload);

			localStorage.setItem("rt__estilosBackoffice", data.access_token);
			dispatch(setLogin(data));
		} catch (error) {
			console.log(error);
		}
	};
};

// export const refreshToken = (payload: string): AppThunk => {
// 	return async (dispatch) => {
// 		try {
// 			const { data } = await authApi.post(`/refresh-token`, { token: payload });
// 			// -- Devolver todo el login cuando se haga refresh token.
// 			localStorage.setItem("rt__estilosBackoffice", data.data.token);
// 			dispatch(setLogin(data));
// 		} catch (error) {
// 			console.log(error);
// 			localStorage.removeItem("rt__estilosBackoffice");
// 			dispatch(isLoading());
// 		}
// 	};
// };

export const refreshToken = (token: string): AppThunk => {
	return async (dispatch) => {
		try {
			const headers = {
				Authorization: `Bearer ${token}`,
				"x-token": token,
			};
			console.log(token);
			// const { data } = await axios.get(`${url}/users/me`, { headers });
			// dispatch(setLogin(data));
			dispatch(setLogin({}));
		} catch (error) {
			console.log(error);
			localStorage.removeItem("rt__estilosBackoffice");
			dispatch(isLoading());
		}
	};
};

export const logoutUser = (): AppThunk => {
	return (dispatch) => {
		localStorage.removeItem("rt__estilosBackoffice");
		dispatch(setLogin(null));
	};
};
