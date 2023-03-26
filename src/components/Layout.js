import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="flex-no-wrap relative flex w-full items-center py-4">
        <Link
          className="flex px-2 items-center cursor-pointer hover:bg-gray-100 rounded-lg"
          href={`/`}
        >
          <Image
            className="-translate-x-2"
            src="/icons8-circled-play-96.png"
            alt="Website Logo"
            width={50}
            height={50}
          />
          <h1 className="text-3xl">Movies</h1>
        </Link>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default Layout;
