import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>PIZZA KING</h4>
          <p>
            We are PIZZA KING. The place for most tasty Pizza on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and Pizza. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Abdal Ahmad</h3>
            </div>

            <p>
              I am Abdal Ahmad, the founder of Pizza King. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;