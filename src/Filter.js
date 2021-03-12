import React from "react";
import { Form } from "react-bootstrap";

const Filter = (handleChange) => {
  return (
    <Form.Group>
      <Form.Label>Diet Preferences</Form.Label> <br />
      <Form.Check name="diet" label="Standard" inline onChange={handleChange} />
      <Form.Check
        name="diet"
        label="Vegetarian"
        inline
        onChange={handleChange}
      />
      <Form.Check name="diet" label="Vegan" inline onChange={handleChange} />
    </Form.Group>
  );
};

export default Filter;
