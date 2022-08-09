import React from "react";

const Post = ({ text, src, alt, width, href, title, height }) => {
  return (
    <li>
      <img src={src} alt={alt} width={width} height={height} />
      <a href="href">{title}</a>
      <p>{text}</p>
    </li>
  );
};

export default Post;
