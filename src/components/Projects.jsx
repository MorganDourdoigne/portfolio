import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { projectCardImages } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

// Fonction principale "Projects"
export default function Projects() {
 // Définition des états locaux
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
// Utilisation du hook useSelector pour accéder à l'état du store Redux
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

// Utilisation du hook useEffect pour mettre à jour les projets principaux lorsque les données changent
  React.useEffect(() => {
    if (data.length !== 0) {
      const updatedData = data.map((project) => {
        const matchingProject = projectCardImages.find(
          (proj) => proj.name === project.name
        );
        return matchingProject ? { ...project, ...matchingProject } : project;
      });
      setMainProjects(updatedData);
    }
  }, [data]);
  

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projets</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oups, vous n'avez pas encore de projets GitHub...
            </h2>
          )}
          {mainProjects.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainProjects.map(function ({
                  id,
                  image,
                  name,
                  description,
                  html_url,
                  homepage,
                }) {
                  return (
                    <Col key={id}>
                      <StyledCard
                        image={image}
                        name={name}
                        description={description}
                        url={html_url}
                        demo={homepage}
                      />
                    </Col>
                  );
                })}
              </Row>
              {data.length > 3 && (
                <Container className="text-center mt-5">
                  <Link to="/All-Projects">
                    <Button
                      size="lg"
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      Tous les <Icon icon="icomoon-free:github" /> Projets
                    </Button>
                  </Link>
                </Container>
              )}
            </>
          )}
        </Container>
      </section>
    </Element>
  );
}
