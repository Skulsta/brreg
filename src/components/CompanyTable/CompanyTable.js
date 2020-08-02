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
        </div>
      </Fade>
    </Jumbotron>
  );
};

export default CompanyTable;
