import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import Axios from "axios";
import { navigate } from "@reach/router";
import { Snackbar } from "@material-ui/core";

const AuthForm = () => {
  const [loginError, setLoginError] = useState(false);

  return (
    <Container>
      <Snackbar
        open={loginError}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        message="Either username or password is incorrect!"
      />
      <Card className="loginForm">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            event.persist();
            Axios.get("https://api.bitbucket.org/2.0/repositories/codetest0", {
              auth: {
                username: event.target.formUsername.value,
                password: event.target.formPassword.value,
              },
            })
              .then((response) => {
                if (response.status == 200) {
                  navigate("/dashboard", {
                    state: {
                      username: event.target.formUsername.value,
                      password: event.target.formPassword.value,
                    },
                  });
                }
              })
              .catch((error) => {
                if (error.response.status == 401) {
                  setLoginError(true);
                }
              });
          }}
        >
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Enter username as 'hmg65' (without quotes)" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password  as 'code@123' (without quotes)" />
          </Form.Group>

          <Form.Group controlId="formRememberMe">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthForm;
