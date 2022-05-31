import Header from "../components/front/Header";
import Footer from "../components/front/Footer";
import BackToTop from "../components/front/BackToTop";
import { useEffect } from "react";
import mainScript from "../lib/MainScript";
import Script from "next/script";
import Image from "next/image";
const Portofolio = ({ portofolio, url }) => {
  useEffect(() => {
    mainScript();
  }, []);
  return (
    <div>
      <Script src="/js/darkmode.js" />
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* Portofolio Section Start */}
      <section className="pt-36 dark:bg-dark" id="home">
        <div className="container">
          <h1 className="mb-4 text-center text-5xl font-bold uppercase text-primary">
            Portofolio
          </h1>
          <div className="flex flex-wrap">
            <div className="flex w-full flex-wrap px-4">
              {portofolio.map((item, index) => {
                return (
                  <div className="mb-12 p-4 md:w-1/3" key={index}>
                    <div className="overflow-hidden rounded-md shadow-md">
                      <div className="relative h-52 w-full">
                        <Image
                          src={`${url}uploads/${item.image}`}
                          alt={item.title}
                          layout="fill"
                        />
                      </div>
                    </div>
                    <h3 className="mt-7 mb-3 text-xl font-semibold text-dark dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-base font-normal text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Portofolio Section End */}
      {/* Footer */}
      <Footer />
      {/* Footer End */}
      {/* Back To Top */}
      <BackToTop />
      {/* Back To Top */}
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const url = process.env.NEXT_PUBLIC_URL;
  const responsePorto = await fetch(`${url}api/portofolio/`);
  const porto = await responsePorto.json();
  const portofolio = porto.portofolio.filter((item) => item.status == "1");
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  return {
    props: {
      portofolio,
      url,
    },
  };
}

export default Portofolio;
