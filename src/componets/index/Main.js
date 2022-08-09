import React from "react";
import Post from "../../img/post-img.jpg";
import Mon from "../../img/mon.jpg";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import Posts from "../Posts/Posts";
import Footer from "../Footer/Footer";
const Main = () => {
  return (
    <section>
      <header>
        <Title text="The code Magazine" type="title" />
        {/*Start Navbar component */}
        <Navbar />
        {/*End Navbar component */}
        <Title text="The Basic Language of the web : HTML" type="subtitle" />
        <img src={Mon} alt="autor" width="50" height="50" />
        <p>
          Posted by <strong>Ramón Villaseñor Vargas</strong> on Monady, August
          21st 2022
        </p>
        <img src={Post} alt="post" width="500" height="200" />
      </header>
      <p>
        All modern websites and web applications are built using three
        fundamental technologies: HTML, CSS and JavaScript. These are the
        languages of the web.
      </p>
      <p>
        In this post, let's focus on HTML. We will learn what HTML is all about,
        and why you too should learn it.
      </p>
      <Title text="What is HTML?" type="subtitle" />
      <p>
        HTML stands for HyperText Markup Language. It's a markup language that
        web developers use to structure and describe the content of a webpage
        (not a programming language).
      </p>
      <p>
        HTML consists of elements that describe different types of content:
        paragraphs, links, headings, images, video, etc. Web browsers understand
        HTML and render HTML code as websites.
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
      <Title text="Why should you learn HTML?" type="subtitle" />
      <p>
        There are countless reasons for learning the fundamental language of the
        web. Here are 5 of them:
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
      <Posts />
      <Footer />
    </section>
  );
};
export default Main;
