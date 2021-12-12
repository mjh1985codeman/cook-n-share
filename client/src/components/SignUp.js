import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";

import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";

const SignUp = () => {
  // setting up initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //set state for form validation
  const [validated] = useState(false);

  //set state for alert
  const [showAlert, setShowAlert] = useState(false);

  // define adding user
  const [createUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // ensuring form has all information input
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await createUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="login-style">
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert
            id="signUp-alert"
            className="login-style"
            dismissable
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            There was an Error. Please note UN and Email must be unique. Please
            Try again!
          </Alert>
          <Form.Group>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
          </Form.Group>

          <button
            disabled={
              !(
                userFormData.username &&
                userFormData.email &&
                userFormData.password
              )
            }
            type="submit"
            variant="contained"
          >
            Submit
          </button>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
