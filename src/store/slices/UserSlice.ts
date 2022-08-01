import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";

interface IUserSlice {
  isAuth: boolean;
}

const initialState = {
  isAuth: false,
} as IUserSlice;

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const loginUser =
  (login: string, password: string) => async (dispatch: any) => {
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem("token", response.data.access);
      dispatch(setIsAuth(true));
    } catch (e) {
      console.log(e);
    }
  };
export const logoutUser = () => async (dispatch: any) => {
  try {
    const response = await AuthService.logout();
    localStorage.removeItem("token");
    dispatch(setIsAuth(false));
  } catch (e) {
    console.log(e);
  }
};

export const { setIsAuth } = UserSlice.actions;
export default UserSlice.reducer;
