import { Configs } from "../Configs";

async function getLoginCookie(sameSite) {
  const getCookie = new URL(
    `/api/login-cookie${sameSite ? "?samesite=true" : ""}`,
    Configs.apiUrl()
  );
  const response = await fetch(getCookie, { credentials: "include" });
  const data = await response.json();
  const status = response.status;
  return {
    data: data,
    status: status
  };
}

export { getLoginCookie };
