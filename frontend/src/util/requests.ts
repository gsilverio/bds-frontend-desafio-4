import qs from "qs";
import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";
import { reduceEachTrailingCommentRange } from "typescript";

type LoginResponse = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  userName: string;
  userId: number;
};

const tokenKey = "authData";
export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ??
  "https://movieflix-devsuperior.herokuapp.com";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "myclientid";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? "myclientsecret";

const basicHeader = () => {
  return "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);
};

type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: basicHeader(),
  };
  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    data,
    headers,
  });
};

export const resquestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem(tokenKey, JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem(tokenKey) ?? "{}";
  const obj = JSON.parse(str);
  return obj as LoginResponse;
};