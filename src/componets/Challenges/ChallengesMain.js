import React from "react";
import challenges from "../../img/challenges.jpg";
import Challenge from "../Challenges/challenge";
import Title from "../Title/Title";

const ChallengesMain = () => {
  return (
    <article>
      <Title text="Converse Chuck Taylor All Star Low Top" type="title" />
      <Challenge src={challenges} alt="tenis" width="250" height="250" />
      <p>
        <strong>$65.00</strong>
      </p>
      <p>Free shipping</p>
      <p>
        Ready to dress up or down, these classic canvas Chucks are an everyday
        wardrobe staple.
      </p>
      <a href="https://converse.com.mx/">More information &rarr;</a>
      <Title text="Product details" type="subtitle" />
      <ul>
        <li>Lightweight, durable canvas sneaker</li>
        <li>Lightly padded footbed for added comfort</li>
        <li>Iconic Chuck Taylor ankle patch</li>
      </ul>
      <button>Add to car</button>
    </article>
  );
};

export default ChallengesMain;
