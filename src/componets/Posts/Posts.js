import React from "react";
import Title from "../Title/Title";
import coding from "../../img/related-1.jpg";
import thunder from "../../img/related-2.jpg";
import code from "../../img/related-3.jpg";
import Post from "./Post";

const Posts = () => {
  return (
    <aside>
      <Title text="Related Post" type="subtitle" />
      <ul>
        <Post
          title="How to Learn Web Development"
          src={coding}
          alt="Coding"
          width="75"
          height="75"
          href="How-to-Learn-Web-Development"
          text="By Jonas Schmedtmann"
        />
        <Post
          title="The Unknow Power of CSS"
          src={thunder}
          alt="thunder"
          width="75"
          height="75"
          href="The-Unknow-Power-of-CSS"
          text="By Jim Dillon"
        />
        <Post
          title="Why JavaScript is Awesome"
          src={code}
          alt="code"
          width="75"
          height="75"
          href="Why-JavaScript-is-Awesome"
          text="By Matilda"
        />
      </ul>
    </aside>
  );
};

export default Posts;
