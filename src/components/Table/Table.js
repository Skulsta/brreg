import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const CompanyTable = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Form>
        <Form.Row className="align-items-center">
          <Col sm={2} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" srOnly>
              Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
          </Col>
          <Col xs="auto" className="my-1">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              click
            </Button>
          </Col>
        </Form.Row>
      </Form>

      <Fade in={open} id="example-collapse-text">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <Table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Fade>
    </>
  );
};

export default CompanyTable;
