// import { useRouter } from "next/router";
import Image from "next/image";
const BlogHome = ({ blogs, url }) => {
  // const router = useRouter();
  return (
    <section className="pt-36 pb-32 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="text-lg font-semibold text-primary">Blog</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
              Tulisan Terkini
            </h2>
            <p className="font-medium text-slate-500">Artikel Up to Date</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {blogs.map((item, index) => {
            return (
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3" key={index}>
                <div className=" mb-10 overflow-hidden rounded-xl p-1 shadow-lg dark:bg-slate-800">
                  <div className="relative h-80 w-full ">
                    <Image
                      priority
                      alt={item.title}
                      src={`${url}api/images/${item.image}`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>

                  <div className="px-8 py-6">
                    <h3>
                      <a
                        href={`/blog/${item.kategori}/${item.title.replace(
                          " ",
                          "-"
                        )}-${item._id}`}
                        className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white"
                      >
                        {item.title}
                      </a>
                    </h3>
                    <p className="mb-4 text-base font-medium text-slate-500">
                      {item.description}
                    </p>
                    <a
                      href={`/blog/${item.kategori}/${item.title.replace(
                        " ",
                        "-"
                      )}-${item._id}`}
                      className="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-75"
                    >
                      Baca Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BlogHome;
