import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { getElementById } from "@utils/dom/get-element-by-id";

import App from "./app";
import { store } from "./store";

getElementById("app").match(
  (element) =>
    createRoot(element).render(
      <Provider store={store}>
        <App />
      </Provider>
    ),
  (err) => alert(err)
);
