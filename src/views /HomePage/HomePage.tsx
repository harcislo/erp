import React from "react";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { historyPush } from "../../utils/historyPush";

interface IHomePage {}

const HomePage: React.FC<IHomePage> = React.memo(() => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="d-flex flex-column align-items-start">
        <h2 className="mt-4 mb-4">Добо пожаловать, юзернейм</h2>
        <NavLink
          onClick={(e) => historyPush("/chats", e, navigate)}
          href="/chats"
          className="link-primary fs-5 mt-2"
        >
          Перейти в чаты
        </NavLink>
        <NavLink
          onClick={(e) => historyPush("/support", e, navigate)}
          href="/support"
          className="link-primary fs-5 mt-2"
        >
          Перейти в службу поддержки
        </NavLink>
        <NavLink
          onClick={(e) => historyPush("/tickets", e, navigate)}
          href="/tickets"
          className="link-primary fs-5 mt-2"
        >
          Перейти в тикеты
        </NavLink>
        <NavLink
          onClick={(e) => historyPush("/tasks", e, navigate)}
          href="/tasks"
          className="link-primary fs-5 mt-2"
        >
          Перейти в задачи
        </NavLink>
        <NavLink
          onClick={(e) => historyPush("/notifications", e, navigate)}
          href="/notifications"
          className="link-primary fs-5 mt-2"
        >
          Перейти в уведомления
        </NavLink>
        <NavLink
          onClick={(e) => historyPush("/profile", e, navigate)}
          href="/profile"
          className="link-primary fs-5 mt-2"
        >
          Перейти в профиль
        </NavLink>
        <h5
          style={{ cursor: "pointer" }}
          className="link-primary fs-5 mt-2 fw-normal"
        >
          Выйти из системы
        </h5>
      </div>
    </Layout>
  );
});

export default HomePage;
