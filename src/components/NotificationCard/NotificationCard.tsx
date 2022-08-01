import React from "react";
import { Button, Card } from "react-bootstrap";

const NotificationCard = React.memo(() => {
  return (
    <Card className="mt-4">
      <Card.Header style={{ color: "#212529", fontWeight: 500 }}>
        Заголовок уведомления находится здесь
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Здесь находится содержимое уведомления Здесь находится содержимое
          уведомления Здесь находится содержимое уведомления{" "}
        </Card.Text>
      </Card.Body>
      <Card.Footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="text-muted"
      >
        <span>вчера в 18:00</span>
        <Button variant="primary">Отметить прочитанным</Button>
      </Card.Footer>
    </Card>
  );
});

export default NotificationCard;
