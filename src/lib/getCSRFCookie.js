import { Configs } from '../Configs';

async function getCSRFCookie(sameSite) {
  const getCookie = new URL(
    `/csrf-cookie${sameSite ? '?samesite=true' : ''}`,
    Configs.apiUrl()
  );
  const response = await fetch(getCookie, { credentials: 'include' });
  const data = await response.json();
  const status = response.status;
  return {
    data: data,
    status: status
  };
}

export { getCSRFCookie };
