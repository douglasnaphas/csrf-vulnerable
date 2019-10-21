import { Configs } from "../Configs";

async function getCookie() {
  const getCookie = new URL(`/cookie`, Configs.apiUrl());
  const response = await fetch(getCookie);
  const data = await response.json();
  const status = response.status;
  return {
    data: data,
    status: status
  };
}

export { getCookie };
