import jwt from "jsonwebtoken";
const checkLogin = (token) => {
  return new Promise((resolve, reject) => {
    try {
      const isLogin = jwt.verify(token, process.env.PRIVATEKEY);
      resolve(isLogin);
    } catch (error) {
      reject(401);
    }
  });
};
export default checkLogin;
