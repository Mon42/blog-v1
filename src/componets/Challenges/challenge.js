import React from "react";

const Challenge = ({ alt, src, width, height }) => {
  return (
    <>
      <img src={src} alt={alt} width={width} height={height} />
    </>
  );
};

export default Challenge;
