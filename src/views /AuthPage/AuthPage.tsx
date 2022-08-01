import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../../hooks/redux";
import { loginUser } from "../../store/slices/UserSlice";

interface IAuthPage {}

const AuthPage: React.FC<IAuthPage> = React.memo(() => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  return (
    <Layout headerIsVisible={false} footerIsVisible={false}>
      <Form
        style={{ marginTop: "20%", margin: "20% auto 0 auto", maxWidth: 355 }}
      >
        <h2 className="mb-3 align-items-center">Авторизация</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Логин</Form.Label>
          <Form.Control
            value={login}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogin(e.target.value)
            }
            type="email"
            placeholder="Введите логин"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            type="password"
            placeholder="Введите пароль"
          />
        </Form.Group>

        <Button
          onClick={() => dispatch(loginUser(login, password))}
          className="w-100"
          variant="primary"
        >
          Войти
        </Button>
      </Form>
    </Layout>
  );
});

export default AuthPage;
