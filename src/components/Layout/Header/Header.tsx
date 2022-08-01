import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { historyPush } from "../../../utils/historyPush";
interface IHeader {}

const Header: React.FC<IHeader> = React.memo(() => {
  const navigate = useNavigate();

  return (
    <Navbar
      className="p-lg-2"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand
        style={{
          display: "flex",
          alignItems: "center",
        }}
        href="/"
        onClick={(e) => historyPush("/", e, navigate)}
      >
        <img
          className="m-1"
          src={require("../../../assets/logoBootstrap.png")}
          alt="logo"
        />
        <span>ERP</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={(e) => historyPush("/", e, navigate)} href="/">
            Главная
          </Nav.Link>
          <Nav.Link
            onClick={(e) => historyPush("/chats", e, navigate)}
            href="/chats"
          >
            Чаты
          </Nav.Link>
          <Nav.Link
            onClick={(e) => historyPush("/support", e, navigate)}
            href="/support"
          >
            Служба поддержки
          </Nav.Link>
          <Nav.Link
            onClick={(e) => historyPush("/tickets", e, navigate)}
            href="/tickets"
          >
            Тикеты
          </Nav.Link>
          <Nav.Link
            onClick={(e) => historyPush("/tasks", e, navigate)}
            href="/tasks"
          >
            Задачи
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            onClick={(e) => historyPush("/notifications", e, navigate)}
            href="/notifications"
          >
            Уведомления <Badge bg="primary">2</Badge>
          </Nav.Link>

          <NavDropdown
            align="end"
            title={"Юсернейм"}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item
              onClick={(e) => historyPush("/profile", e, navigate)}
              href="/profile"
            >
              Профиль
            </NavDropdown.Item>
            <NavDropdown.Item>Выйти</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Header;
