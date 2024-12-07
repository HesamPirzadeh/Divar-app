const setCookie = (token) => {
  document.cookie = `accessToken=${token.accessToken};max-age=${
    1 * 24 * 60 * 60
  }`;

  document.cookie = `refreshToken=${token.refreshToken};max-age=${
    30 * 24 * 60 * 60
  }`;
};

const getCookie = (tk) => {
  return document.cookie
    .split(";")
    .find((tok) => tok.trim().split("=")[0] === tk)
    ?.split("=")[1];
};

const clearCookies = () => {
  document.cookie =
    "accessToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
  document.cookie =
    "refreshToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
};

export { setCookie, getCookie, clearCookies };
