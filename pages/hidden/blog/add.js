import Header from "../../../components/admin/header";
import { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import isLogin from "../../../lib/fe/login";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const AddBlog = ({ url, category }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [content, setContent] = useState("");
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("metaDescription", data.metaDescription);
    formData.append("metaKeyword", data.metaKeyword);
    formData.append("description", data.description);
    formData.append("date", data.date);
    formData.append("image", data.image[0]);
    formData.append("content", content);
    formData.append("category_id", data.category_id);
    const token = getCookie("token") || "";
    const response = await axios({
      method: "POST",
      url: `${url}api/blogs/`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      },
    });

    if (response.status == 200) {
      router.push("/hidden/blog");
    }
  };
  return (
    <div>
      {/* Header Start */}
      <Header />
      {/* Header End */}
      <main>
        <h1 className="text-lg text-center">Add Blogs</h1>
        <div className="container w-8/12 shadow-lg p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Title</span>
              <input
                {...register("title")}
                type="text"
                className="block w-full mt-1 p-2 border-b-2 border-slate-400 text-sm focus:outline-none"
                name="title"
              />
            </label>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Meta Destription</span>
              <input
                {...register("metaDescription")}
                type="text"
                className="block w-full mt-1 p-2 border-b-2 border-slate-400 text-sm focus:outline-none"
                name="metaDescription"
              />
            </label>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Meta Keyword</span>
              <input
                {...register("metaKeyword")}
                type="text"
                className="block w-full mt-1 p-2 border-b-2 border-slate-400 text-sm focus:outline-none"
                name="metaKeyword"
              />
            </label>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Description</span>
              <input
                {...register("description")}
                type="text"
                className="block w-full mt-1 p-2 border-b-2 border-slate-400 text-sm focus:outline-none"
                name="description"
              />
            </label>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Date</span>
              <input
                {...register("date")}
                type="date"
                className=""
                name="date"
              />
            </label>
            <label htmlFor="image" className="mb-4 block">
              <input
                type="file"
                {...register("image")}
                name="image"
                id="image"
              />
            </label>
            <div className="w-3/4 mb-7">
              <label
                className="inline-block text-sm text-gray-600"
                htmlFor="color"
              >
                Select Category
              </label>
              <div className="relative flex w-full">
                <select
                  {...register("category_id")}
                  className="block w-full py-3 pl-4 pr-8 bg-white border border-gray-300 rounded-sm appearance-none cursor-pointer focus:outline-none hover:border-gray-400"
                >
                  <option>Select...</option>
                  {category.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.kategori}
                      </option>
                    );
                  })}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 pointer-events-none">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <SunEditor
              name="content-blog"
              onChange={(text) => {
                setContent(text);
              }}
              setOptions={{
                height: 200,
                buttonList: [
                  [
                    "formatBlock",
                    "font",
                    "fontSize",
                    "fontColor",
                    "align",
                    "paragraphStyle",
                    "blockquote",
                  ],
                  [
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "subscript",
                    "superscript",
                  ],
                  ["removeFormat"],
                  ["outdent", "indent"],
                  ["table", "list"],
                  ["link", "image", "video"],
                ],
              }}
            />

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

export default AddBlog;

export const getServerSideProps = async ({ req, res }) => {
  const url = process.env.NEXT_PUBLIC_URL;
  const { status } = isLogin(req, res);
  if (status == 401) {
    return {
      redirect: {
        destination: "/hidden/login",
        permanent: false,
      },
    };
  }
  const category = await axios.get(`${url}api/category`);

  return { props: { url, category: category.data.kategori } };
};
