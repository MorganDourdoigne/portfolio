import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import { Link } from 'react-router-dom';

// Importation des données
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

// Fonction principale "Skills"
export default function Skills() {
// Utilisation du hook useAppContext pour accéder au contexte de l'application
  const { theme } = useAppContext();

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Compétences</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          {resume && (
  <Link to={resume}>
    <Button
      size="lg"
      variant={theme === "light" ? "outline-dark" : "outline-light"}
      className="mt-5"
    >
      Résumé
    </Button>
  </Link>
)}

        </Container>
      </section>
    </Element>
  );
}
