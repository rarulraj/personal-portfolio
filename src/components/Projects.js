import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ScreenshotHeader.png";
import projImg2 from "../assets/img/EndlessRunner - Unreal Editor 12_13_2022 1_17_01 PM.png";
import projImg3 from "../assets/img/FirstPersonShooter (64-bit Development PCD3D_SM5)  12_13_2022 12_46_25 PM.png";
import projImg4 from "../assets/img/MAgnetVr.png";
import projImg5 from "../assets/img/Screenshot (5).png"
import projImg6 from "../assets/img/2019-04-28 185133-Window-1920x1080-f5475219388388f9774beac3adbdb06a.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Powerless",
      description: "Unity 2D",
      imgUrl: projImg1,
    },
    {
      title: "UDrone",
      description: "Unreal Engine",
      imgUrl: projImg3,
    },
    {
      title: "Rainbow Runner",
      description: "Unreal Engine",
      imgUrl: projImg2,
    },
    {
      title: "CZombie",
      description: "Unreal Engine",
      imgUrl: projImg6,
    },
    {
      title: "Voxel Shooter",
      description: "Unreal Engine",
      imgUrl: projImg5,
    },
    {
      title: "M Puzzle",
      description: "Unreal Engine(VR)",
      imgUrl: projImg4,
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
                <h2><p>Wide array of Unreal engine and Unity projects showcasing skills in C++ and C# combined with blueprinting.</p> </h2>
                <p> Practicing efficent game performance techiniques and good fundamental game development practices. All projects and artwork have been created by me.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
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
                      <p>All artwork was made by me using multiple creative enviroments both 2D and 3D. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Languages used include C++,C#,Lua,and Python.All artwork made in a creative enviroments in both 2D and 3D. Showcases mastery in Unreal and Unity's blueprinting systems. </p>
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
