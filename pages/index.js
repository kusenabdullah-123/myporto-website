import Header from "../components/front/Header";
import HeroHome from "../components/front/HeroHome";
import AboutHome from "../components/front/AboutHome";
import PortoFolioHome from "../components/front/PortoFolioHome";
import BlogHome from "../components/front/BlogHome";
import Footer from "../components/front/Footer";
import BackToTop from "../components/front/BackToTop";
import { useEffect } from "react";
import mainScript from "../lib/MainScript";
import Head from "next/head";
import Script from "next/script";
import axios from "axios";
export default function Home({ url, portofolio, blogs }) {
  useEffect(() => {
    mainScript();
  }, []);
  return (
    <div>
      <Head>
        <meta name="keywords" content="KusenaDev,portfolio,learning" />
        <meta name="author" content="Kusena Dev" />
        <meta
          name="description"
          content="Kusenadev adalah website pribadi yang di dalam nya ada blogs dan juga project yang pernah di buat"
        />
        <meta name="robots" content="all" />
        {/* <script src="/js/darkmode.js" /> */}
      </Head>
      <Script src="/js/darkmode.js" />
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* Hero Section Start */}
      <HeroHome />
      {/* Hero Section End */}
      {/* About Section Start */}
      <AboutHome />
      {/* About Section End */}
      {/* Portfolio Section Start */}
      <PortoFolioHome portofolio={portofolio} url={url} />
      {/* Portfolio Section End */}
      {/* Blog Section */}
      <BlogHome blogs={blogs} url={url} />
      {/* Blog Section End */}
      {/* Footer */}
      <Footer />
      {/* Footer End */}
      {/* Back To Top */}
      <BackToTop />
      {/* Back To Top */}
      <Script
        src="https://code.iconify.design/2/2.2.1/iconify.min.js"
        sameSite="true"
      />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  
  const url = process.env.NEXT_PUBLIC_URL;
  const blogs = await axios.get(`${url}api/blogs/?limit=3`);
  
  const portfolio = await axios.get(`${url}api/portofolio/?limit=2`);
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

  return {
    props: {
      blogs: blogs.data.blogs,
      portofolio: portfolio.data.portofolio,
      url,
    },
  };
}
