import React from "react";
import { Link, Outlet } from "react-router-dom";
import Post from "../../img/post-img.jpg";
import Mon from "../../img/mon.jpg";
import coding from "../../img/related-1.jpg";
import thunder from "../../img/related-2.jpg";
import code from "../../img/related-3.jpg";

const Main = () => {
  return (
    <section>
      <body>
        <h1> The Code Magazine</h1>
        <nav>
          <ul>
            <li>
              <Link to="/BG">Blog</Link>
            </li>
            <li>
              <a href="/">Challenges</a>
            </li>
            <li>
              <a href="/">Flexbox</a>
            </li>
            <li>
              <a href="/">CSS Grid</a>
            </li>
          </ul>
        </nav>
        <Outlet />
        <h2> The Basic Language of the Web: HTML</h2>
        <img src={Mon} alt="autor" width="50" height="50" />
        <p>
          Posted by <strong>Ramón Villaseñor Vargas</strong> on Monady, August
          21st 2022
        </p>
        <img src={Post} alt="post" width="500" height="200" />
        <p>
          All modern websites and web applications are built using three
          fundamental technologies: HTML, CSS and JavaScript. These are the
          languages of the web.
        </p>
        <p>
          In this post, let's focus on HTML. We will learn what HTML is all
          about, and why you too should learn it.
        </p>
        <h3>What is HTML?</h3>
        <p>
          HTML stands for HyperText Markup Language. It's a markup language that
          web developers use to structure and describe the content of a webpage
          (not a programming language).
        </p>
        <p>
          HTML consists of elements that describe different types of content:
          paragraphs, links, headings, images, video, etc. Web browsers
          understand HTML and render HTML code as websites.
        </p>
        <p>In HTML, each element is made up of 3 parts:</p>
        <ol>
          <li>The opening tag</li>
          <li>The closing tag</li>
          <li>The actual element</li>
          <li>
            You can learn more at the{" "}
            <a href="https://developer.mozilla.org/es/docs/Web/HTML">
              MDN Web Docs.
            </a>
          </li>
        </ol>
        <h5>Why should you learn HTML?</h5>
        <p>
          There are countless reasons for learning the fundamental language of
          the web. Here are 5 of them:
        </p>
        <ul>
          <li>To be able to use the fundamental web dev language</li>
          <li>
            To hand-craft beautiful websites instead of relying on tools like
            Worpress or Wix
          </li>
          <li>To build web applications</li>
          <li>To impress friends</li>
          <li>To have fun </li>
        </ul>
        <p>Hopefully you learned something new here. See you next time!</p>
        <h4>Related Post</h4>
        <ul>
          <li>
            <img src={coding} alt="Coding" width="75" />
            <a href="/">How to Learn Web Development</a>
          </li>
          <li>
            <img src={thunder} alt="thunder" width="75" />
            <a href="/">The Unknow Power of CSS</a>
          </li>
          <li>
            <img src={code} alt="code" width="75" />
            <a href>Why JavaScript is Awesome</a>
          </li>
        </ul>
      </body>
    </section>
  );
};
export default Main;
