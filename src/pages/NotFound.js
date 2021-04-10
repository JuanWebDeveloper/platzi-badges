import React from "react";

import "./styles/NotFound.css";
import astronautNotFound from "../images/not-found.webp";

function NotFound() {
  return (
    <React.Fragment>
      <div className="Not__found">
        <div className="Not__found-container">
          <img src={astronautNotFound} alt="Astronaut Not Found" height="60%" />

          <div className="text-center">
            <h1 className="text-white">Hmmm!</h1>
            <h3 className="text-white">
              We did not find what you were looking for.
            </h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
