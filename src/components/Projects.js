import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ferreteria.jpg";
import projImg2 from "../assets/img/Productos-varios.jpg";
import projImg3 from "../assets/img/Zapateria.jpg";
import projImg4 from "../assets/img/nft.png";
import projImg5 from "../assets/img/travel.png";
import projImg6 from "../assets/img/shoes.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      description: "Design & Development",
      imgUrl: projImg1,
      title: "Online hardware Store",
      link: "https://ferreterialegacy.cl/",
      linkDes: "Visit Here"
    },
    {
      description: "Design & Development",
      imgUrl: projImg2,
      title: "Online Book Store",
      link: "https://www.libreriarengo.cl/",
      linkDes: "Visit Here"
      
    },
    {
      description: "Design & Development",
      imgUrl: projImg3,
      title: "Online Shoes Store",
      link: "https://zap3bbb.cl/",
      linkDes: "Visit Here"
      
    },
    {
      description: "Design & Development",
      imgUrl: projImg4,
      title: "Nft Prototype",
      link: "https://www.figma.com/proto/Mys6qYbScCpre16g3cXMFf/NFT?page-id=0%3A1&node-id=12%3A106&viewport=352%2C267%2C0.13&scaling=min-zoom&starting-point-node-id=15%3A679",
      linkDes: "Visit Here"
    },
    {
      description: "Design & Development",
      imgUrl: projImg5,
      title: "Travel Store",
      link: "https://www.figma.com/proto/gGgKqqnex4lLt6s3VRLuCS/Traveler?node-id=1%3A3&starting-point-node-id=1%3A3",
      linkDes: "Visit Here"
    },
    {
      description: "Design & Development",
      imgUrl: projImg6,
      title: "Shoes Prototype",
      link: "https://www.figma.com/proto/IZcUSEDkWov7Q2sGY59oDA/Snickers?page-id=0%3A1&node-id=7%3A118&viewport=334%2C403%2C0.18&scaling=contain&starting-point-node-id=7%3A118",
      linkDes: "Visit Here"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I show you to all the big and small websites I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
