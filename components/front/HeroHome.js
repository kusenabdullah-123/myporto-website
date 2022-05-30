import Image from "next/image";
const heroHome = () => {
  return (
    <section className="pt-36 dark:bg-dark" id="home">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Halo All 👋 , Saya
              <span className="mt-1 block text-4xl text-dark dark:text-white lg:text-5xl">
                Kusena Dev
              </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-slate-500 lg:text-2xl">
              Fullstack Developer
            </h2>
            <p className="mb-9 font-medium text-slate-500">
              Belajar Web Developer
            </p>
            <a
              href="#about-home"
              className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >
              Hubungi Saya
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-0">
              <div className="relative z-10 mx-auto h-96 w-full max-w-full ">
                <Image
                  priority
                  alt="Kusen Abdullah"
                  src="/image/images.webp"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  viewBox="0 0 200 200"
                  height={300}
                  width={300}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#0F62FE"
                    d="M53.4,-42.3C63.4,-30,61.8,-8.1,58,15.2C54.3,38.6,48.4,63.5,34.1,70.2C19.7,76.9,-3.2,65.5,-22.7,53.6C-42.3,41.7,-58.5,29.4,-59.9,15.8C-61.3,2.3,-47.8,-12.5,-35.3,-25.4C-22.8,-38.2,-11.4,-49.2,5.1,-53.2C21.7,-57.3,43.3,-54.6,53.4,-42.3Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default heroHome;
