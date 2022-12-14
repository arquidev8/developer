import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/odina2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h1 style={{color:"white", fontFamily:"fantasy", fontSize: "2.5rem", letterSpacing: "0.7rem", marginBottom: "-60px", marginTop: "20px"}}> Arquidev </h1>

            <img style={{visibility: "hidden"}} src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/hector-hernandez-bb950322a/"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" href="https://www.facebook.com/hectoralejandro.hernandezrodriguez.3/"><img src={navIcon2} alt="Icon" /></a>
              <a target="_blank" href="https://www.instagram.com/arqhector08/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
