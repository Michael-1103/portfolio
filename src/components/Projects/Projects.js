import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Hunter from "../../Assets/Projects/hunter.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Quelque projet sur lesquels j'ai travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hunter}
              isBlog={false}
              title="My Hunter"
              description="Une reproduction du célèbre jeu Duck Hunt, de NINTENDO, où le principe est de tirer sur les canards à l'écran."
              ghLink="https://github.com/EpitechPGEPromo2029/B-MUL-100-MLN-1-1-myhunter-michael.derrien"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
