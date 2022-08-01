import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F8F9FA",
        color: "#000000",
        bottom: 0,
      }}
    >
      <p className="d-flex justify-content-center p-3 m-0">ERP 2022</p>
    </Container>
  );
};

export default Footer;
