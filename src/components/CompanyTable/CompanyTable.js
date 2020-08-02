import React from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Fade from "react-bootstrap/Fade";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./CompanyTable.module.scss";

const CompanyTable = (props) => {
  return (
    <Jumbotron className={classes.Table + " bg-white"}>
      <Fade in={props.open} id="example-collapse-text">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <Table>
            <thead>
              <tr>
                <th>Navn</th>
                <th>Orgnr.</th>
                <th>Sted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bedrift AS</td>
                <td>871168172</td>
                <td>Oslo</td>
              </tr>
              <tr>
                <td>Bedrift AS</td>
                <td>871168172</td>
                <td>Oslo</td>
              </tr>
              <tr>
                <td>Bedrift AS</td>
                <td>871168172 </td>
                <td>Oslo</td>
              </tr>
            </tbody>
          </Table>
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
                  <p class="font-weight-bold">Postnr. / Sted</p>
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
