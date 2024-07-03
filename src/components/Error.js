import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let title = "Error occured!";
  let description = "Something went wrong!";

  if (error.status === 404) {
    description =
      "This page isn't available. Sorry about that try searching for something else.";
  }
  return (
    <div className="flex justify-center items-center flex-col gap-4 m-8 p-8">
      {error.status !== 404 && (
        <h1 className="text-3xl font-bold p-3">{title}</h1>
      )}
      {error.status === 404 && (
        <img
          className="w-44"
          src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
          alt="monkey"
        />
      )}
      <p className="text-xl text-center font-medium p-2 w-[30%]">
        {description}
      </p>
      {error.status === 404 && (
        <Link href="/" className="flex gap-1 justify-center items-center">
          <svg
            className="h-12"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            fill="red"
          >
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
          <span className="font-bold text-2xl">YouTube</span>
        </Link>
      )}
    </div>
  );
};

export default Error;
