import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>OH NO!</h1>
      <p>Something went wrong!  Keep Trying, Be Patient!  I promise it'll work.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}