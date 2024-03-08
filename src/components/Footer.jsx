import { Link, ScrollRestoration } from "react-router-dom";

function Footer() {
  return (
    <>
      <Link
        to={`/`}
        className="text-center duration-500 hover:text-purple-600 cursor-pointer m-4"
      >
        <ScrollRestoration />
        <h1 className="text-3xl mt-10">FullStackSolutions</h1>
      </Link>

      <div className="w-full flex justify-center gap-4 pb-10">
        <button className="p-2 rounded-xl border bg-gray-800 border-gray-700 duration-500 ease-in-out hover:text-purple-600">
          <Link to={`/about`}>
            About me
            <ScrollRestoration />
          </Link>
        </button>
        <button className="p-2 rounded-xl border bg-gray-800 border-gray-700 duration-500 ease-in-out hover:text-purple-600">
          <Link to={`https://github.com/Mateusz627`}>GitHub</Link>
        </button>
        <button className="p-2 rounded-xl border bg-gray-800 border-gray-700 duration-500 ease-in-out hover:text-purple-600">
          <Link to={`/contactme`}>
            Contact me <ScrollRestoration />
          </Link>
        </button>
      </div>
    </>
  );
}

export default Footer;
