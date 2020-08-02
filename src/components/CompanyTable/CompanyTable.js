import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Fade from "react-bootstrap/Fade";
import Jumbotron from "react-bootstrap/Jumbotron";

const CompanyTable = (props) => {
  return (
    <Jumbotron className="bg-white">
      <Fade in={props.open} id="example-collapse-text">
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
    </Jumbotron>
  );
};

export default CompanyTable;
