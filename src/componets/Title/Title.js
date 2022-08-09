import React from "react";

const Title = ({ text, type }) => {
  return <>{type === "title" ? <h1>{text}</h1> : <h3>{text}</h3>}</>;
};

export default Title;
