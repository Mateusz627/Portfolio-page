import { useRouteError, Link, ScrollRestoration } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-gray-50 bg-custom-dark ">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="px-6 py-2 mt-4 bg-purple-600 rounded-2xl duration-500 hover:bg-purple-900">
        <Link to={`/`}>
          Back
          <ScrollRestoration />
        </Link>
      </button>
    </div>
  );
}
