import Header from "../../../components/admin/header";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import isLogin from "../../../lib/fe/login";
const AddCategory = ({ url }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const token = getCookie("token") || "";
      const response = await axios({
        method: "POST",
        url: `${url}api/category/`,
        data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (response.status == 200) {
        router.push("/hidden/category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Header Start */}
      <Header />
      {/* Header End */}
      <main>
        <h1 className="text-lg text-center">Add Category</h1>
        <div className="container w-8/12 shadow-lg p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Category</span>
              <input
                {...register("category")}
                type="text"
                className="block w-full mt-1 p-2 border-b-2 border-slate-400 text-sm focus:outline-none"
                name="category"
              />
            </label>

            <button
              type="submit"
              className="h-10 w-40 rounded-md bg-primary text-white hover:border-2 hover:border-primary hover:bg-inherit hover:text-black dark:text-white dark:hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddCategory;

export const getServerSideProps = async ({ req, res }) => {
  const url = process.env.URL;
  const { status } = isLogin(req, res);
  if (status == 401) {
    return {
      redirect: {
        destination: "/hidden/login",
        permanent: false,
      },
    };
  }

  return { props: { url } };
};
