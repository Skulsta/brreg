import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Fade from "react-bootstrap/Fade";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./CompanyTable.module.scss";

const CompanyTable = (props) => {
  return (
    <Jumbotron fluid="md" className={classes.Table + " bg-white"}>
      <Fade in={props.open}>
        <div className={classes.TableContent + " shadow p-3 rounded"}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  <p className="font-weight-bold">Navn</p>
                </Col>
                <Col>
                  <p className="font-weight-bold">Orgnr.</p>
                </Col>
                <Col>
                  <p className="font-weight-bold">Sted</p>
                </Col>
              </Row>
            </ListGroup.Item>
            {props.companies ? (
              props.companies.enheter.slice(0, 5).map((item) => (
                <ListGroup.Item key={item.organisasjonsnummer}>
                  <Row>
                    <Col>{item.navn}</Col>
                    <Col>{item.organisasjonsnummer}</Col>
                    <Col>
                      {item.forretningsadresse &&
                      item.forretningsadresse.postnummer &&
                      item.forretningsadresse.poststed
                        ? item.forretningsadresse.postnummer +
                          " " +
                          item.forretningsadresse.poststed
                        : " "}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>
                <Row>
                  <Col>Ingen bedrifter matchet søket</Col>
                </Row>
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
      </Fade>
    </Jumbotron>
  );
};

export default CompanyTable;
