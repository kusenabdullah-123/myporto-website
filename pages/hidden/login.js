import { useState } from "react";
import axios from "axios";
import { setCookies, getCookie } from "cookies-next";
import { useRouter } from "next/router";
const Login = ({ url }) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}api/login/`, {
        username,
        password,
      });
      setCookies("login", response.data.login);
      setCookies("token", response.data.token);
      router.push("/hidden");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        className="w-full rounded-lg bg-white md:w-1/3"
        onSubmit={handleSubmit}
      >
        <div className="mt-6 flex justify-center font-bold" />
        <h2 className="mb-4 text-center text-3xl text-gray-700">Login Form</h2>
        <div className="px-12 pb-10">
          <div className="mb-2 w-full">
            <div className="flex items-center">
              <i className="fas fa-user z-10 ml-3 fill-current text-xs text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="-mx-6 w-full rounded border px-4 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-2 w-full">
            <div className="flex items-center">
              <i className="fas fa-lock z-10 ml-3 fill-current text-xs text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="-mx-6 w-full rounded border px-4 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <a href="#" className="float-right mb-4 text-xs text-gray-500">
            Forgot Password?
          </a>
          <button
            type="submit"
            className="w-full rounded-full bg-green-600 py-2 text-gray-100 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;

export const getServerSideProps = ({ req, res }) => {
  const url = process.env.URL;
  const cookie = getCookie("login", { req, res });
  if (cookie == true) {
    return {
      redirect: {
        destination: "/hidden",
        permanent: false,
        // statusCode: 301,
      },
    };
  }

  return { props: { url } };
};
