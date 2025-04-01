import React from "react";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App/App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
