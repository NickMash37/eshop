import Layout from "./layout";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import Main from "./pages/MainPage/Main";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { OrderPage } from "./pages/OrderPage/OrderPage";

export const RoutesMap = () => {
  
  return (
      <Routes>
        <Route index element={<Main />} />
        <Route path={"/"} element={<Layout />}>
          <Route
            path={"/home"}
            element={<HomePage />}
          />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/order"} element={<OrderPage />} />
        </Route>
      </Routes>
  );
};
