import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/index";
import { BrowserRouter } from "react-router-dom";
import { RoutesMap } from "./routes";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <RoutesMap />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
