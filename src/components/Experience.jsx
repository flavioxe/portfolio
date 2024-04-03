import { useTranslation } from "react-i18next";
import styles from "./Experience.module.scss";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// https://react-bootstrap.netlify.app/docs/components/tabs/
export function Experience() {
  const { t } = useTranslation();
  return (
    <>
      <section className={`${styles.experiencesWrapper} d-flex flex-column`}>
        <h2>{t("hello")}</h2>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className={`${styles.experiencesNavItem}`}>
                  <Nav.Link eventKey="first">Allycode</Nav.Link>
                </Nav.Item>
                <Nav.Item className={`${styles.experiencesNavItem}`}>
                  <Nav.Link eventKey="second">
                    Lourdes Buregio Arquitetura
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={`${styles.experiencesNavItem}`}>
                  <Nav.Link eventKey="third">Condepe-Fidem</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className={`d-flex`}>
                    <h5>Desenvolvedor front-end</h5>
                    <a href="https://allycode.com.br/" target="_blank">
                      @ Allycode
                    </a>
                  </div>
                  <p>Setembro de 2021 - o momento</p>
                  <p>São Caetano do sul, São Paulo, Brasil</p>
                  <p>
                    -Criação e manutenção de websites e landing pages utilizando
                    tecnologias como HTML, CSS3, SASS, Bootstrap, Vue.js e Nuxt;
                    -Realização de ajustes no back-end utilizando PHP e Laravel;
                    -Versionamento com Git; -Participação de reuniões com
                    clientes para entender requisitos e feedbacks; -Auxilio no
                    desenvolvimento de UI/UX da plataforma utilizando Figma;
                    -Gerenciamento de projetos através de metodologias ágeis
                    como Kanban.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className={`d-flex`}>
                    <h5>Auxiliar de arquitetura</h5>
                    <span>
                      @ Lourdes Buregio Arquitetura, Urbanismo E Representacoes
                    </span>
                  </div>
                  <p>Junho de 2020 - Dezembro de 2020</p>
                  <p>Olinda, Pernambuco, Brasil</p>
                  <p>
                    Auxílio na concepção arquitetônica e paisagística de
                    projetos, desenho técnico arquitetônico, modelagem 3D,
                    renderização, layout de pranchas.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className={`d-flex`}>
                    <h5>Estagiário em planejamento</h5>
                    <a
                      href="http://www.condepefidem.pe.gov.br/web/condepe-fidem"
                      target="_blank"
                    >
                      @ CONDEPE / FIDEM – Agência Estadual de Planejamento e
                      Pesquisa de Pernambuco
                    </a>
                  </div>
                  <p>Junho de 2018 - Março de 2020 </p>
                  <p>Recife, Pernambuco, Brasil</p>
                  <p>
                    Construção e manutenção de mapas temáticos, elaboração do
                    layout de pranchas para apresentação, análise e
                    compatibilização de dados, criação e edição de
                    apresentações.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </section>
    </>
  );
}
