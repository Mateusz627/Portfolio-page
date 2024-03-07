import { Link, ScrollRestoration } from "react-router-dom";

function Footer() {
  return (
    <>
      <p>Footer</p>
      <Link
        to={`/`}
        className="duration-500 hover:text-purple-600 cursor-pointer m-4"
      >
        <ScrollRestoration />
        <h1 className="text-3xl">FullStackSolutions</h1>
      </Link>
    </>
  );
}

export default Footer;
