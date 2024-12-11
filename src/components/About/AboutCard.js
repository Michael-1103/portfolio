import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Enchanté, je m'appelle <span className="purple">Derrien Michaël </span>
            je suis originaire de <span className="purple"> Clermont-Ferrand, en France.</span>
            <br />
            Je suis actuellement Étudiant en 1ère année à<span className="purple"> Epitech</span> sur le campus de Moulins.
            <br />
            J'ai également étudier au lycée général et technologique <span className="purple">Jean Zay</span> à Thiers
            <br />
            <br />
            J'aime également,
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Les jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> La musique
            </li>
            <li className="about-activity">
              <ImPointRight /> Les voitures
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
