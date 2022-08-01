import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Nav } from "react-bootstrap";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import PaginationUI from "../../components/UI/Pagination/PaginationUI";

interface INotificationsPage {}

const NotificationsPage: React.FC<INotificationsPage> = React.memo(() => {
  const [activePaginate, setActivePaginate] = useState(1);

  return (
    <Layout>
      <h2 className="mt-4 mb-4 align-items-center">Уведомления</h2>
      <Container style={{ maxWidth: 750 }}>
        <Nav
          style={{ maxWidth: 300 }}
          justify
          variant="tabs"
          defaultActiveKey="link-1"
        >
          <Nav.Item>
            <Nav.Link
              onClick={(e) => {
                e.preventDefault();
              }}
              eventKey="link-1"
            >
              Непрочитанные
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={(e) => {
                e.preventDefault();
              }}
              eventKey="link-2"
            >
              Прочитанные
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <NotificationCard />
        <NotificationCard />
        <NotificationCard />

        <div className="mt-4">
          <PaginationUI
            amount={5}
            setActive={setActivePaginate}
            active={activePaginate}
          />
        </div>
      </Container>
    </Layout>
  );
});

export default NotificationsPage;
