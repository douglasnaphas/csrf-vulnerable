import { Configs } from "../Configs";

async function getLoginCookie() {
  const getCookie = new URL(`/login-cookie`, Configs.apiUrl());
  const response = await fetch(getCookie);
  const data = await response.json();
  const status = response.status;
  return {
    data: data,
    status: status
  };
}

export { getLoginCookie };
