import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>PIZZA KING</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @pizza_king</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.youtube.com/channel/UCgYVqvZ6eHruBdn0zOju4_A">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com/_abdal_editz/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/ahmadabdal">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;