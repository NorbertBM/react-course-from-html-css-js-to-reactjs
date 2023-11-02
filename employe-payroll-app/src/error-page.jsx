import { useRouteError } from "react-router-dom";

import React from "react";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="container animate-left m-auto">
      <div className="alert-danger d-flex flex-column">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
