import Header from "../../../components/admin/header";
import Link from "next/link";
import { getCookie, removeCookies } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/router";
import isLogin from "../../../lib/fe/login";

export default function HomePortofolio({ data, url }) {
  const router = useRouter();
  const onUpdateStatus = async (_id, status) => {
    const token = getCookie("token") || "";
    const response = await axios({
      method: "PATCH",
      url: `${url}api/portofolio/${_id}`,
      data: { status },
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      router.push("/hidden/portofolio");
    }
  };
  const onDelete = async (_id) => {
    const token = getCookie("token") || "";
    const formData = new FormData();
    formData.append("_id", _id);
    const response = await axios({
      method: "DELETE",
      url: `${url}api/portofolio/`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      router.push("/hidden/portofolio");
    }
  };
  return (
    <div>
      <Header />
      <main>
        <h1 className="text-lg text-center">Portofolio</h1>
        <div className="container mx-auto">
          <div className="py-4 px-4">
            <Link href="/hidden/portofolio/add">
              <a className="h-11 w-11 border-2 rounded-full mb-3 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width={25}
                  height={25}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#2563eb"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                  />
                </svg>
              </a>
            </Link>
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Status</th>

                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {data.map((item, index) => {
                  return (
                    <tr
                      className="text-gray-700 dark:text-gray-400"
                      key={index}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src={item.image}
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{item.title}</td>
                      <td className="px-4 py-3 text-xs">
                        {item.status == "0" ? (
                          <span className="px-2 py-1 font-semibold leading-tight text-yellow-500 bg-yellow-100 rounded-full dark:bg-yellow-700 dark:text-yellow-100">
                            pending
                          </span>
                        ) : (
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Approved
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-4 text-sm">
                          <button
                            onClick={() =>
                              router.push(`/hidden/portofolio/edit/${item._id}`)
                            }
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              onDelete(item._id);
                            }}
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {item.status == "0" ? (
                            <button
                              onClick={() => {
                                onUpdateStatus(item._id, "1");
                              }}
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Delete"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                width="1em"
                                height="1em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 36 36"
                              >
                                <path
                                  fill="currentColor"
                                  d="M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z"
                                  className="clr-i-outline clr-i-outline-path-1"
                                />
                                <path fill="none" d="M0 0h36v36H0z" />
                              </svg>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                onUpdateStatus(item._id, "0");
                              }}
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Delete"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                width="1em"
                                height="1em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill="currentColor"
                                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8L2.146 2.854Z"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const url = process.env.NEXT_PUBLIC_URL;
  const { status, token } = isLogin(req, res);
  if (status == 401) {
    return {
      redirect: {
        destination: "/hidden/login",
        permanent: false,
      },
    };
  }
  const response = await axios.get(`${url}api/portofolio/`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (response.status == 401) {
    removeCookies("login", { req, res });
    removeCookies("token", { req, res });
    return {
      redirect: {
        destination: "/hidden/login",
        permanent: false,
        // statusCode: 301,
      },
    };
  }

  return { props: { data: response.data.portofolio, url } };
};
