import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Container } from "react-bootstrap";

interface ILayout {
  headerIsVisible?: boolean;
  footerIsVisible?: boolean;
  children?: any;
}

const Layout: React.FC<ILayout> = ({
  children,
  headerIsVisible = true,
  footerIsVisible = true,
}) => {
  return (
    <div
      style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
    >
      {headerIsVisible && <Header />}
      <div
        style={{
          flex: "1 1 auto",
        }}
      >
        <Container>{children}</Container>
      </div>
      {footerIsVisible && <Footer />}
    </div>
  );
};

export default Layout;
