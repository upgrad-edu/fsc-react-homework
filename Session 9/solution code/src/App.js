import { useState } from 'react';
import { Button, MenuItem } from "@material-ui/core";
import {
  ValidatorForm,
  TextValidator, 
  SelectValidator
} from "react-material-ui-form-validator";

import "./styles.css";

export default function App() {
  return <UserForm />;
}

function UserForm() {
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const updatedUser = {
      ...user,
      [name]: value
    };
    setUser(updatedUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <TextValidator
        label="Name"
        onChange={handleChange}
        name="name"
        type="text"
        validators={["required"]}
        errorMessages={["Please enter your name"]}
        value={user.name}
      />
      <TextValidator
        label="Phone Number"
        onChange={handleChange}
        name="phone"
        type="text"
        validators={["required", "isNumber"]}
        errorMessages={["Please enter your phone number", "Phone number must contain all digits"]}
        value={user.phone}
      />
      <SelectValidator
        label="Country"
        onChange={handleChange}
        name="country"
        type="text"
        validators={["required"]}
        errorMessages={["Please enter your country"]}
        value={user.country}
      >
        <MenuItem value="india">India</MenuItem>
        <MenuItem value="usa">USA</MenuItem>
      </SelectValidator>
      <TextValidator
        label="Address"
        onChange={handleChange}
        name="address"
        type="text"
        value={user.address}
      />
      <TextValidator
        label="Email"
        onChange={handleChange}
        name="email"
        type="text"
        validators={["required", "isEmail"]}
        errorMessages={["Please enter your email"]}
        value={user.email}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </ValidatorForm>
  );
}
