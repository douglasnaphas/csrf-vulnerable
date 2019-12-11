import { Configs } from "../Configs";

async function getCSRFCookie(sameSite) {
  const getCookie = new URL(
    `/api/csrf-cookie${sameSite ? "?samesite=true" : ""}`,
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

export { getCSRFCookie };
