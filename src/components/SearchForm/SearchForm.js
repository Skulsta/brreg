import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import classes from "./SearchForm.module.scss";

const SearchForm = (props) => {
  return (
    <Container
      className={classes.Form + " d-flex flex-row jusify-content-between"}
    >
      <Form.Control className="mr-2" placeholder="Bedrift AS" size="lg" />
      <Button
        onClick={() => props.setOpen(true)}
        // aria-controls="example-collapse-text"
        // aria-expanded={open}
        size="lg"
      >
        Søk
      </Button>
    </Container>
  );
};

export default SearchForm;
