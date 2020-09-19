import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import classes from "./SearchForm.module.scss";

const SearchForm = (props) => {
    const [query, setQuery] = useState("");
    const [url, setUrl] = useState("");

    //TODO fikse base url
    const getData = () => {
        setUrl(
            `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${query}`
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setOpen(true);
        if (query) getData();
    };

    return (
        <Container className="d-flex row justify-content-center">
            <Form
                onSubmit={handleSubmit}
                className={classes.Form + " d-flex flex-row"}
            >
                <Form.Control
                    autoFocus
                    className={classes.SearchField + " mr-2"}
                    placeholder="Bedrift AS"
                    onChange={(event) => setQuery(event.target.value)}
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
