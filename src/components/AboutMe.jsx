// Importation des bibliothèques nécessaires
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";

// Importation des données
import { moreInfo } from "../data";

// Importation des composants
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import me from "../images/me.png";

// Définition du style pour la section "À propos de moi"
const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

// Fonction principale "AboutMe"
export default function AboutMe() {
// Utilisation du hook useSelector pour accéder à la donnée "bio" dans le store Redux
  const { bio } = useSelector(selectData);

// Rendu du composant
  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
            <h2>À propos de moi</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={me}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
