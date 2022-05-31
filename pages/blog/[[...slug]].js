import Header from "../../components/front/Header";
import Footer from "../../components/front/Footer";
import BackToTop from "../../components/front/BackToTop";
import { useEffect } from "react";
import mainScript from "../../lib/MainScript";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
export default function Blogs({ data, type, url }) {
  const router = useRouter();
  useEffect(() => {
    mainScript();
  }, []);
  return (
    <>
      <Script src="/js/darkmode.js" />
      <Header />
      {type == "short" ? (
        <main className="pt-36 dark:bg-dark" id="home">
          <div className="container">
            <h1 className="mb-4 text-center text-5xl font-bold uppercase text-primary">
              BLog
            </h1>
            <section className="mx-auto mb-5 flex max-w-xl flex-row md:max-w-4xl lg:max-w-7xl">
              <div className="article-blog flex basis-full flex-col md:basis-3/4 lg:basis-3/4">
                {data?.map((item, index) => {
                  return (
                    <article
                      key={index}
                      className="mb-5 flex max-h-max flex-col md:flex-row lg:flex-row"
                    >
                      <div className="left basis-1/4 px-4 text-left">
                        <ul className="blog_meta list">
                          <li>
                            <div className="flex items-center py-2 text-sm text-gray-500 dark:text-white">
                              <Link href={`/blog/${item.kategori}`}>
                                <a>{item.kategori}</a>
                              </Link>
                              <span
                                className="inline-block pl-3"
                                id="icon-blog"
                              >
                                <svg
                                  xmlns="http:www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  role="img"
                                  width="30"
                                  height="30"
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex items-center py-2 text-sm text-gray-500 dark:text-white">
                              Kusena Dev
                              <span
                                id="icon-blog"
                                className="inline-block pl-3"
                              >
                                <svg
                                  xmlns="http:www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  role="img"
                                  style={{ verticalAlign: "-0.125em" }}
                                  width={30}
                                  height={30}
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 1024 1024"
                                >
                                  <path
                                    fill="black"
                                    d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                                  />
                                </svg>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center py-2 text-sm text-gray-500 dark:text-white">
                              {item.date}
                              <span
                                id="icon-blog"
                                className="inline-block pl-3"
                              >
                                <svg
                                  xmlns="http:www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  role="img"
                                  style={{ verticalAlign: "-0.125em" }}
                                  width={30}
                                  height={30}
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 16 16"
                                >
                                  <g fill="black">
                                    <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406c1.258 0 2-1.066 2-2.871c0-1.934-.781-2.668-1.953-2.668c-.926 0-1.797.672-1.797 1.809c0 1.16.824 1.77 1.676 1.77c.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164c-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18c-.601 0-1.144-.383-1.144-1.2c0-.823.582-1.21 1.168-1.21c.633 0 1.16.398 1.16 1.23z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                  </g>
                                </svg>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center py-2 text-sm text-gray-500 dark:text-white">
                              1.2M Views
                              <span
                                id="icon-blog"
                                className="inline-block pl-3"
                              >
                                <svg
                                  xmlns="http:www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  role="img"
                                  style={{ verticalAlign: "-0.125em" }}
                                  width={30}
                                  height={30}
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 1024 1024"
                                >
                                  <path
                                    fill="black"
                                    d="M396 512a112 112 0 1 0 224 0a112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176s-78.8 176-176 176z"
                                  />
                                </svg>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="right basis-2/3 px-4 py-3">
                        <figure className=" mb-2 max-w-lg">
                          {/* <img src={`${url}/api/images/${item.image}`} /> */}
                          <div className="relative h-72 w-full">
                            <Image
                              priority
                              src={`${url}api/images/${item.image}`}
                              alt={item.title}
                              layout="fill"
                            />
                          </div>
                        </figure>
                        <h2 className="mb-4 text-2xl font-bold hover:text-primary dark:text-white dark:hover:text-primary">
                          <Link
                            href={`/blog/${item.kategori}/${item.title.replace(
                              " ",
                              "-"
                            )}-${item._id}`}
                          >
                            <a>{item.title}</a>
                          </Link>
                        </h2>
                        <p className="mb-7 dark:text-white">
                          {item.description}
                        </p>
                        <button
                          onClick={() => {
                            router.push(
                              `/blog/${item.kategori}/${item.title.replace(
                                " ",
                                "-"
                              )}-${item._id}`
                            );
                          }}
                          className="h-10 w-40 rounded-md bg-primary text-white hover:border-2 hover:border-primary hover:bg-inherit hover:text-black dark:text-white dark:hover:text-white"
                        >
                          View More
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
            <div className="pagination mx-auto mt-2 w-2/3 pb-8 md:w-1/3 lg:w-1/3">
              <ul className="flex flex-row justify-between">
                <li className="group flex h-10 basis-1/12 items-center justify-center">
                  <Link href="/blog">
                    <a>
                      <span className="dark:text-white">
                        <svg
                          xmlns="http:www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width={30}
                          height={30}
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="#0F62FE"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m11 5l-7 7l7 7m-7-7h16"
                          />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="paginate-active flex h-10 basis-1/12 cursor-pointer items-center justify-center">
                  <Link href="/blog">
                    <a>1</a>
                  </Link>
                </li>
                <li className="flex h-10 basis-1/12 cursor-pointer items-center justify-center hover:bg-primary hover:text-white dark:text-white">
                  <Link href="/blog">
                    <a>2</a>
                  </Link>
                </li>
                <li className="flex h-10 basis-1/12 cursor-pointer items-center justify-center hover:bg-primary hover:text-white dark:text-white">
                  <Link href="/blog">
                    <a>3</a>
                  </Link>
                </li>
                <li className="flex h-10 basis-1/12 cursor-pointer items-center justify-center hover:text-white dark:text-white">
                  <Link href="/blog">
                    <a>
                      <span
                        className="iconify"
                        data-icon="akar-icons:arrow-right"
                        style={{ color: "#0f62fe" }}
                        data-width={30}
                        data-height={30}
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
      ) : (
        <main className="pt-36 dark:bg-dark" id="home">
          <div className="container">
            <h1 className="mb-4 text-center text-3xl font-bold uppercase text-primary">
              {data.title}
            </h1>
            <section className="mx-auto mb-5 flex max-w-xl flex-row md:max-w-4xl lg:max-w-7xl">
              <div className="article-blog flex basis-full flex-col p-4 md:basis-3/4 lg:basis-3/4">
                <article className="mb-5 flex max-h-max flex-col">
                  <div
                    className="text-dark dark:text-white"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />
                </article>
              </div>
            </section>
            <div className="pagination mx-auto mt-2 w-2/3 pb-8 md:w-1/3 lg:w-1/3" />
          </div>
        </main>
      )}
      <Footer />
      <BackToTop />
    </>
  );
}

export async function getServerSideProps({ req, res, params }) {
  const url = process.env.URL;
  const response = await fetch(`${url}api/blogs/`);
  const blogs = await response.json();
  let type = !params?.slug ? "short" : "";
  let data = !params?.slug ? blogs.blogs : [];

  if (params?.slug) {
    const { length } = params.slug;
    if (length == 1) {
      type = "short";
      data = blogs.blogs.filter((item) => {
        return item.kategori == params.slug[0];
      });
    } else if (length == 2) {
      type = "long";
      const _id = params.slug.at(-1).split("-").at(-1);
      const response = await fetch(`${url}api/blogs/${_id}`);
      const result = await response.json();
      data = result.data[0];
    } else {
      return {
        notFound: true,
      };
    }
  }
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  return {
    props: {
      type,
      data,
      url,
    },
  };
}
