import React from "react";

import "./styles/PageError.css";

function PageError(props) {
  return (
    <div className="PageError">
      <h2>Oops!</h2>
      <h3>It seems that an error has arisen.</h3>
      <h3>
        Error name: <b>{props.error.message}</b>
      </h3>
    </div>
  );
}

export default PageError;
