import Link from "next/link";
import { removeCookies } from "cookies-next";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const onLogout = () => {
    removeCookies("login");
    removeCookies("token");
    router.push("/hidden/login");
  };
  return (
    <>
      {/* Header Start */}
      <header className="w-full">
        <div className="container mx-auto  flex justify-between py-3">
          <Link href="/hidden">
            <a className="font-normal text-lg">Kusena Dev</a>
          </Link>

          <nav>
            <ul className="flex">
              <li>
                <Link href="/hidden">
                  <a className="text-sm px-3 font-normal">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/hidden/portofolio">
                  <a className="text-sm px-3 font-normal">Portofolio</a>
                </Link>
              </li>
              <li>
                <Link href="/hidden/blog">
                  <a className="text-sm px-3 font-normal">Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="/hidden/category">
                  <a className="text-sm px-3 font-normal">Category</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    onLogout();
                  }}
                  className="text-sm px-3 font-normal"
                >
                  Logout
                </button>
                {/* <Link href="/logout">
                  <a className="text-sm px-3 font-normal">Logout</a>
                </Link> */}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Header End */}
    </>
  );
};
export default Header;
