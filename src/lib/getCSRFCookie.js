import { Configs } from "../Configs";

async function getCSRFCookie() {
  const getCookie = new URL(`/csrf-cookie`, Configs.apiUrl());
  const response = await fetch(getCookie);
  const data = await response.json();
  const status = response.status;
  return {
    data: data,
    status: status
  };
}

export { getCSRFCookie };
