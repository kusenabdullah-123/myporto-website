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
                  src="/image/image-about.webp"
                  sizes="100vw"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default heroHome;
