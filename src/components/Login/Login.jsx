import { useContext, useState } from "react";
import "./Login.css";
import { AppContext } from "../../context";
import { Navigate } from "react-router";
import { Box, Button } from "@mui/material";

export const Login = () => {
  const { onAuth, isAuth } = useContext(AppContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    onAuth(login, password);
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      className={"login-box"}
      sx={{
        width: "700px",
        height: "300px",
        margin: "150px auto",
        border: "1px solid #dbd5d5",
        borderRadius: "50px",
        alignItems: "center",
      }}
    >
      <h2 className={"login-title"}>Вход в аккаунт</h2>
      <Box
        onSubmit={onLogin}
        sx={{
          alignItems: "center",
          paddingTop: "50px",
          display: "flex",
          flexDirection: "column",
          width: '300px'
        }}
      >
        <label htmlFor="login">E-mail</label>
        <input
          name="login"
          type="email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <label htmlFor="password">Пароль</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </Box>
      <Button
        type="submit"
        onClick={onLogin}
        color="success"
        variant="contained"
        sx={{
          marginTop: "20px",
          width: "100px",
          borderColor: "#dbd5d5",
          color: "white",
          padding: "5px 20px",
        }}
      >
        Войти
      </Button>
    </Box>
  );
};
