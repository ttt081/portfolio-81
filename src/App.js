import { useState, useRef } from "react";
import {
  Container,
  Navbar,
  Card,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaEnvelope,
  FaFileCode,
  FaTrophy,
  FaTerminal,
  FaGraduationCap,
  FaGlobe,
  FaMicrochip,
  FaLaptopCode,
  FaCog,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import "./App.css";

export default function App() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_hft1alh",
        "template_a4ddbfg",
        formRef.current,
        "snzre0XGes54-4Fye"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message: " + error.text);
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="app">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <FaTerminal className="me-2" /> Sheikh Ismail
          </Navbar.Brand>
          <div className="d-flex gap-3">
            <a
              href="https://github.com/ttt081"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/in/sk-ismail-hsn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="py-5">
        {/* Hero Section */}
        <Row className="mb-5 hero-section">
          <Col md={8} className="text-white">
            <h1 className="display-4 mb-3">
              <TypeAnimation
                sequence={[
                  "Turning Code into Solutions",
                  2000,
                  "Building Intelligent Systems",
                  2000,
                ]}
                repeat={Infinity}
              />
            </h1>
            <p className="lead mb-4">
              BSc in CSE @ RUET (2022-Present) | AI/ML Enthusiast | Competitive
              Programmer
            </p>
            <div className="d-flex gap-3">
              <Button variant="outline-light" href="#contact">
                Contact Me
              </Button>
              <Button variant="light" href="https://github.com/ttt081">
                View GitHub
              </Button>
            </div>
          </Col>
        </Row>

        {/* About Me Section */}
        <Card className="mb-5 custom-card about-section">
          <Card.Body>
            <h2 className="mb-4">
              <FaUserGraduate className="me-2" />
              About Me
            </h2>
            <blockquote className="tagline">
              "Turning Code into Solutions, One Algorithm at a Time"
            </blockquote>
            <p className="bio-text">
              I'm a passionate Computer Science and Engineering student at
              Rajshahi University of Engineering & Technology (RUET), currently
              in my third year. With a strong foundation in both software
              development and hardware systems, I specialize in building
              efficient solutions across multiple domains. My journey includes
              solving 300+ complex coding problems on platforms like Codeforces,
              Hackerrank and CodeChef, while simultaneously exploring AI/ML
              applications and embedded systems development.
            </p>
          </Card.Body>
        </Card>

        {/* Education & Certifications */}
        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="h-100 education-card">
              <Card.Body>
                <h3>
                  <FaGraduationCap className="me-2" />
                  Education
                </h3>
                <hr />
                <div className="education-item">
                  <h4>BSc in Computer Science & Engineering</h4>
                  <p className="institution">
                    Rajshahi University of Engineering & Technology (RUET)
                  </p>
                  <p className="duration">2022 - Present</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 certification-card">
              <Card.Body>
                <h3>
                  <FaFileCode className="me-2" />
                  Certifications
                </h3>
                <hr />
                <ul className="certification-list">
                  <li>
                    <h5>PHP Laravel Framework</h5>
                    <p className="issuer">
                      The EDGE Program (Bangladesh Govt.)
                    </p>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="g-4 mb-5">
          <Col md={12}>
            <Card className="experience-card">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaBriefcase
                    className="me-2"
                    style={{ fontSize: "1.5rem", color: "#2a9d8f" }}
                  />
                  <h3>Work Experience</h3>
                </div>
                <hr />
                <div className="experience-item">
                  <h4>Industrial Trainee</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="company">
                      Texlab IT, Rajshahi (2025 - Present)
                    </p>
                  </div>
                  <p className="experience-description">
                    Currently undergoing industrial training at Texlab IT as
                    part of my academic curriculum at RUET. Gaining hands-on
                    experience in:
                  </p>
                  <ul className="experience-list">
                    <li>Software development lifecycle</li>
                    <li>IT solutions implementation</li>
                    <li>Real-world project deployment</li>
                    <li>Team collaboration and agile workflows</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="mb-4">
            <FaFileCode className="me-2" />
            Technical Skills
          </h3>

          <Row className="g-4">
            {/* Programming Languages */}
            <Col md={6} lg={4}>
              <Card className="skill-card">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaCode className="skill-icon me-2" />
                    <h5 className="mb-0">Programming Languages</h5>
                  </div>
                  <ul className="skill-list">
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Web Development */}
            <Col md={6} lg={4}>
              <Card className="skill-card">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaGlobe className="skill-icon me-2" />
                    <h5 className="mb-0">Web Development</h5>
                  </div>
                  <ul className="skill-list">
                    <li>
                      <strong>Frontend:</strong> HTML, CSS, JavaScript
                    </li>
                    <li>
                      <strong>Backend:</strong> PHP
                    </li>
                    <li>
                      <strong>Databases:</strong> SQL (MySQL)
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Embedded Systems */}
            <Col md={6} lg={4}>
              <Card className="skill-card">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaMicrochip className="skill-icon me-2" />
                    <h5 className="mb-0">Embedded Systems</h5>
                  </div>
                  <ul className="skill-list">
                    <li>Microcontroller programming (STM32, Arduino)</li>
                    <li>Assembly language</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Software Development */}
            <Col md={6} lg={4}>
              <Card className="skill-card">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaLaptopCode className="skill-icon me-2" />
                    <h5 className="mb-0">Software Development</h5>
                  </div>
                  <ul className="skill-list">
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>Design patterns</li>
                    <li>Software architecture</li>
                    <li>Agile methodologies</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Hardware Knowledge */}
            <Col md={6} lg={4}>
              <Card className="skill-card">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaCog className="skill-icon me-2" />
                    <h5 className="mb-0">Hardware Knowledge</h5>
                  </div>
                  <ul className="skill-list">
                    <li>Digital Logic Design</li>
                    <li>Computer Architecture</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Contact Section */}
        <Card id="contact" className="mb-5 custom-card">
          <Card.Body>
            <h3>
              <FaEnvelope className="me-2" />
              Get in Touch
            </h3>
            <hr />
            <Row>
              <Col md={6}>
                <Form ref={formRef} onSubmit={sendEmail}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="from_email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="message"
                      as="textarea"
                      rows={4}
                      placeholder="Your message"
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled={sending}>
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </Form>
              </Col>
              <Col md={6} className="mt-4 mt-md-0">
                <div className="contact-info">
                  <h5>Alternative Contact</h5>
                  <p>Connect via LinkedIn for professional inquiries:</p>
                  <Button
                    variant="outline-primary"
                    href="https://linkedin.com/in/sk-ismail-hsn"
                    target="_blank"
                  >
                    <FaLinkedin className="me-2" /> LinkedIn Profile
                  </Button>
                  <hr />
                  <h5>Location</h5>
                  <p>Rajshahi-6204, Bangladesh</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container className="text-center">
          <div className="mb-3">
            <a
              href="https://codeforces.com/ttt_2003081"
              target="_blank"
              rel="noreferrer"
              className="mx-3"
            >
              <FaTrophy /> Codeforces
            </a>
            <a
              href="https://codechef.com/users/ttt_081"
              target="_blank"
              rel="noreferrer"
              className="mx-3"
            >
              <FaCode /> CodeChef
            </a>
          </div>
          <p className="mb-0">
            © 2025 Sheikh Ismail Hossain. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}
