import React, { useState, useEffect } from "react";
import Button from "../../Button";
export default function ErrorBoundaries({
  hasError = false,
  handleError,
  message = "Something went wrong",
  children,
}) {
  const [error, setError] = useState(hasError);
  useEffect(() => {
    setError(hasError);
  }, [hasError]);
  if (error) {
    return (
      <div className="alert alert-danger">
        <p className="mr-1">{message}</p>
        <Button text={"Try again"} onClick={handleError} />
      </div>
    );
  }
  return children;
}
