import Image from "next/image";
import Link from "next/link";
const PortoFolioHome = ({ portofolio, url }) => {
  return (
    <section
      id="portofolio"
      className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="text-lg font-semibold text-primary">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
              Project Terbaru
            </h2>
            <p className="font-medium text-slate-500">
              Project Terbaru Yang Saya Buat
            </p>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          {portofolio.map((item, index) => {
            return (
              <div className="mb-12 p-4 md:w-1/2" key={index}>
                <div className="relative h-80 w-full overflow-hidden rounded-md shadow-sm">
                  <Image
                    priority
                    alt="Mountains"
                    src={item.image}
                    sizes="100vw"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-7 mb-3 text-xl font-semibold text-dark dark:text-white">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-slate-500">
                  {item.description}
                </p>
                <div className="flex flex-wrap mt-6 p-2 items-center">
                  {/* github */}
                  <Link legacyBehavior href={item.github}>
                    <a className="hover mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 text-slate-400 hover:border-primary hover:bg-primary hover:text-white">
                      <svg
                        role="img"
                        className="fill-current"
                        width={20}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  </Link>
                  <Link legacyBehavior href={item.link}>
                    <a className="hover mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 text-slate-400 hover:border-primary hover:bg-primary hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M13.544 10.456a4.368 4.368 0 0 0-6.176 0l-3.089 3.088a4.367 4.367 0 1 0 6.177 6.177L12 18.177" />
                          <path d="M10.456 13.544a4.368 4.368 0 0 0 6.176 0l3.089-3.088a4.367 4.367 0 1 0-6.177-6.177L12 5.823" />
                        </g>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PortoFolioHome;
