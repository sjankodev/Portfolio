import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";

function Home2() {
    return (

        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br/>
                            <br/>I am a
                            <i>
                                <b className="purple"> Full Stack Web Developer with 4 years of experience. </b>
                            </i>
                            <br/>
                            <br/>
                            I have developed many online systems such as  &nbsp;
                            <i>
                                <b className="purple">eCommerce websites, Shopping Carts, Reservation systems,
                                    Auction websites,
                                    Order processing systems, CRM, Custom CMS, Learning applications, Classified
                                    websites, Online job platforms,
                                    Social networking websites, Corporate sites and portals and more.</b>
                            </i>
                            <br/>
                            <br/>
                            Whenever possible, I also apply my passion for developing products
                            with <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with <span
                            className="purple">me</span>
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">

                            </li>
                            <li className="social-icons">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter/>
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>

    );
}

export default Home2;
