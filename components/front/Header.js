import Link from "next/link";

const header = () => {
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <div className="flex flex-row items-center justify-center">
              <img
                src=""
                height={30}
                width={30}
                alt="logo"
                id="logo-header"
                className="mr-2 inline-block"
              />
              <Link legacyBehavior href="/">
                <a className="inline-blockblock py-6 text-lg font-bold text-primary">
                  Kusena Dev
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="absolute right-4 block lg:hidden"
            >
              <span className="hamburger-line hamburger-transision origin-top-left" />
              <span className="hamburger-line hamburger-transision" />
              <span className="hamburger-line hamburger-transision origin-bottom-left" />
            </button>
            <nav
              id="nav-menu"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-md dark:shadow-slate-300 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent lg:dark:shadow-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link legacyBehavior href="/">
                    <a className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link legacyBehavior href="/about">
                    <a className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
                      About
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link legacyBehavior href="/portofolio">
                    <a className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
                      Portofolio
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link legacyBehavior href="/blog">
                    <a className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="mt-3 flex items-center pl-9 lg:mt-0">
                  <div className="flex">
                    <span className="mr-2 text-sm text-slate-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width={20}
                        height={20}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#1d4ed8"
                          d="M256 104c-83.813 0-152 68.187-152 152s68.187 152 152 152s152-68.187 152-152s-68.187-152-152-152Zm0 272a120 120 0 1 1 120-120a120.136 120.136 0 0 1-120 120ZM240 16h32v48h-32zm0 432h32v48h-32zm208-208h48v32h-48zm-432 0h48v32H16zm372.687 171.314l22.627-22.627l32 32l-22.627 22.627zm-320-320l22.628-22.628l32 32l-22.628 22.628zm-.002 329.375l32-32l22.628 22.626l-32 32zm320.002-320.003l32-32l22.628 22.628l-32 32z"
                        />
                      </svg>
                    </span>
                    <input
                      type="checkbox"
                      className="hidden"
                      id="dark-toogle"
                    />
                    <label htmlFor="dark-toogle">
                      <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div className="toogle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out" />
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width={20}
                        height={20}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#1d4ed8"
                          d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29c0-1.167.242-2.278.681-3.286z"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
