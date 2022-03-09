import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Stefan Jankovic </span>
            from <span className="purple"> Nis, Serbia.</span>
            <br /> I am a <span className="purple">Full-stack developer. </span> My development path began about 4 years ago.
            It's a story full of hard work that made me achieve my goals by all means because hard work certainly pays off. In the beginning, I was building simple landings, browser games, extensions, some social media, e-commerce apps,
            when I became more experienced and skilled I started to deal with huge and complex projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            “Make it work, make it right, make it fast.”{" "}
          </p>
          <footer className="blockquote-footer">Kent Beck</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
