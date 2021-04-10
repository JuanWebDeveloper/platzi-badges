import React from "react";
import md5 from "md5";

// Aprende más del Gravatar en: http://gravatar.com
function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);

  return (
    <img
      className={props.className}
      src={`https://s.gravatar.com/avatar/${hash}?s=500`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
