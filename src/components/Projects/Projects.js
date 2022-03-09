import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import movie from "../../Assets/Projects/movie.gif";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import nbaapp from "../../Assets/Projects/nbaapp.png";
import shop from "../../Assets/Projects/shop.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={shop}
                            isBlog={false}
                            title="Online shop"
                            description="Online shop with many features. Multi-Vendor,MultiLanguage,Virtual Products Support,
                API, Administration with high level of access, Checkouts are saved to administration, email notification for
                every new order, and etc."
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={nbaapp}
                            isBlog={false}
                            title="NBA App"
                            description="NBA App for team scores, team players, team info, team stats, player stats and more."
                        />
                    </Col>


                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={movie}
                            isBlog={false}
                            title="Movie recommendation"
                            description="Movie recommendation application. Search movie as we type, save favourite movies,
                            Netflix style horizontal scroll effect."
                            link="https://github.com/soumyajit4419/Plant_AI"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
