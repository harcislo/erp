import { AuthResponse } from "../models/response /AuthResponse";
import { AxiosResponse } from "axios";
import $api from "../api";

export default class AuthService {
  static async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/singIn/", { login, password });
  }
  static async logout(): Promise<void> {
    return $api.post("/revokeToken/");
  }
}
