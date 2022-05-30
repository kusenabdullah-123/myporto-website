import { getCookie } from "cookies-next";
const isLogin = (req, res) => {
  const cookie = getCookie("login", { req, res });
  const token = getCookie("token", { req, res }) || "";
  if (cookie !== true) {
    return { status: 401 };
  } else {
    return { status: 200, token };
  }
};

export default isLogin;
