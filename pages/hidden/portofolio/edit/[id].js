import Header from "../../../../components/admin/header";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import isLogin from "../../../../lib/fe/login";
const EditPortofolio = ({ portofolio, url }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("_id", portofolio._id);
      formData.append("title", data.title);
      formData.append("metaDesc", data.metaDesc);
      formData.append("metaKeyword", data.metaKeyword);
      formData.append("description", data.description);
      if (data.image.length > 0) {
        formData.append("image", data.image[0]);
      }
      const token = getCookie("token") || "";
      const response = await axios({
        method: "PUT",
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
        <h1 className="text-lg text-center">Add Portofolio</h1>
        <div className="container w-8/12 shadow-lg p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Title</span>
              <input
                {...register("title")}
                type="text"
                className="block w-full mt-1 p-2 border-b-2 border-slate-400 text-sm focus:outline-none"
                name="title"
                defaultValue={portofolio.title}
              />
            </label>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Meta Destription</span>
              <input
                {...register("metaDesc")}
                type="text"
                className="block w-full mt-1 p-2 border-b-2 border-slate-400 text-sm focus:outline-none"
                name="metaDesc"
                defaultValue={portofolio.metaDescription}
              />
            </label>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Meta Keyword</span>
              <input
                {...register("metaKeyword")}
                type="text"
                className="block w-full mt-1 p-2 border-b-2 border-slate-400 text-sm focus:outline-none"
                name="metaKeyword"
                defaultValue={portofolio.metaKeyword}
              />
            </label>
            <label htmlFor="title" className="mb-4 block">
              <span className="block">Description</span>
              <textarea
                {...register("description")}
                className="border-2 w-full border-slate-400 focus:outline-none"
                name="description"
                cols={30}
                rows={10}
                defaultValue={portofolio.description}
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

export default EditPortofolio;

export const getServerSideProps = async ({ req, res, params }) => {
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
  const result = await axios.get(`${url}api/portofolio/${params.id}`);

  return { props: { portofolio: result.data.data[0], url } };
};
