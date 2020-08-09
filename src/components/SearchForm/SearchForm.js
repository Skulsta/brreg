import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import classes from "./SearchForm.module.scss";

const SearchForm = (props) => {
  const handleSubmit = (event) => {
    props.setOpen(true);
    event.preventDefault();
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form
        onSubmit={handleSubmit}
        className={classes.Form + " d-flex flex-row"}
      >
        <Form.Control
          autoFocus
          className={classes.SearchField + " mr-2"}
          placeholder="Bedrift AS"
          size="lg"
        />
        <Button type="submit" size="lg">
          Søk
        </Button>
      </Form>
    </Container>
  );
};

export default SearchForm;
