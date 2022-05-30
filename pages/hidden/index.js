import Header from "../../components/admin/header";
import isLogin from "../../lib/fe/login";
export default function Home() {
  return (
    <div>
      {/* Header Start */}
      <Header />
      {/* Header End */}
      <main>
        <h1 className="text-lg text-center">Home</h1>
      </main>
    </div>
  );
}

export const getServerSideProps = ({ req, res }) => {
  const { status, token } = isLogin(req, res);
  if (status == 401) {
    return {
      redirect: {
        destination: "/hidden/login",
        permanent: false,
      },
    };
  }

  return { props: { token } };
};
