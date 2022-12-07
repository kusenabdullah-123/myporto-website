import Header from "../components/front/Header";
import Footer from "../components/front/Footer";
import BackToTop from "../components/front/BackToTop";
import { useEffect } from "react";
import mainScript from "../lib/MainScript";
import Script from "next/script";
import Image from "next/image";
const About = () => {
  useEffect(() => {
    mainScript();
  }, []);
  return (
    <div>
      {/* Header Start */}
      <Script src="/js/darkmode.js" />
      <Header />
      {/* Header End */}
      {/* About Section Start */}
      <section
        className=" border-3 border-red-600 pt-36 pb-7 dark:bg-dark"
        id="home"
      >
        <div className="container">
          <h1 className="mb-4 text-center text-5xl font-bold uppercase text-primary">
            Tentang Saya
          </h1>
          <div className="flex items-center justify-center py-10 px-10 md:px-28 lg:px-28">
            <div className="flex flex-col justify-evenly p-5 md:flex-row lg:flex-row">
              <div className="images mb-4 basis-5/12">
                <div className="relative h-80 w-full">
                  <Image
                    src="/image/image-about.webp"
                    alt="kusena dev image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                {/* <img src= alt="image left" /> */}
              </div>
              <div className="about basis-5/12">
                <h2 className="mb-5 text-4xl font-bold uppercase dark:text-white">
                  M Kusen Abdullah
                </h2>
                <p className="text-base font-medium dark:text-white">
                  Halo! Saya Kusen Abdullah fullstack developer, saya mulai
                  tertarik menjadi Programmer sejak lulus smk, dan dari situ
                  saya terus belajar mengasah skill Programmer dari berbagai
                  sumber terutama media youtube. Semenjak saya belajar awal
                  sampai sekarang banyak pengalaman yang saya peroleh mulai dari
                  bagaimana cara menganangi error sampai optimasi sebuah
                  aplikasi / website
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Footer */}
      <Footer />
      {/* Footer End */}
      {/* Back To Top */}
      <BackToTop />
      {/* Back To Top */}
    </div>
  );
};
export default About;
