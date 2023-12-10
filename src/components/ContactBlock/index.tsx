import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import {  Content, ContentWrapper, ContactSection } from "./styles";

interface MiddleBlockProps {
  titulo: string;
  email: string;
  mensaje: string;
}

const MiddleBlock = ({ titulo, email, mensaje }: MiddleBlockProps) => {
  return (
    <ContactSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6 style={{fontSize: "26px"}}>{(titulo)}</h6>
              <h6 style={{fontSize: "20px"}}>{(email)}</h6>
              <Content>{(mensaje)}</Content>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </ContactSection>
  );
};

export default withTranslation()(MiddleBlock);
