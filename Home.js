import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Gradient } from "react-gradient";

const Home = () => {
  return (
    <Container>
      <Card
        style={{
          textAlign: "center",
          backgroundColor: "#0052cc",
          margin: "8rem",
          marginBottom: "6rem",
          borderWidth: "2px",
        }}
      >
        <Gradient
          gradients={[
            ["#FBC44B", "#85F9FF"],
            ["#85F9FF", "#FBC44B"],
          ]}
          property="text"
          duration={750}
          angle="30deg"
          style={{ display: "inline-block" }}
        >
          <p style={{ fontSize: "175px" }}>saransh</p>
          <p style={{ fontSize: "40px", fontStyle: "italic" }}>your project manager, for you.</p>
        </Gradient>
      </Card>
      <Button size="lg" target="_blank" style={{ marginLeft: "25rem" }} href="https://bitbucket.org/dashboard/overview">
        Go to BitBucket Repository
      </Button>
    </Container>
  );
};

export default Home;
