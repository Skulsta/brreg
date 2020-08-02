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
      <Fade in={props.open} id="example-collapse-text">
        <div className={classes.TableContent + " shadow p-3 rounded"}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  <p class="font-weight-bold">Navn</p>
                </Col>
                <Col>
                  <p class="font-weight-bold">Orgnr.</p>
                </Col>
                <Col>
                  <p class="font-weight-bold">Sted</p>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Bedrift AS</Col>
                <Col>871168172</Col>
                <Col>0552 Oslo</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Bedrift AS</Col>
                <Col>871168172</Col>
                <Col>0552 Oslo</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Bedrift AS</Col>
                <Col>871168172</Col>
                <Col>0552 Oslo</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Fade>
    </Jumbotron>
  );
};

export default CompanyTable;
