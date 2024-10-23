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

export { setCookie, getCookie };
