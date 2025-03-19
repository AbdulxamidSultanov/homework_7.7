import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      <h3>
        {error?.status} - {error?.data?.message || "Uknown error"}
      </h3>
      <h1>{error.status}</h1>
      <p>Somthing went wrong...</p>
    </div>
  );
};

export default Error;
