const setCookie = (token) => {
  document.cookie = `accessToken=${token.accessToken};max-age=${
    1 * 24 * 60 * 60
  }`;

  document.cookie = `refreshToken=${token.refreshToken};max-age=${
    30 * 24 * 60 * 60
  }`;
};

const getCookie = (token) => {
  return document.cookie
    .split(";")
    .find((t) => t.trim().split("=")[0] === token).split("=")[1];
  
};

export { setCookie, getCookie };
