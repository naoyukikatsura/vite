import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import Home from "@components/home";
import { getElementById } from "@utils/dom/get-element-by-id";

import { store } from "./store";

getElementById("app").match(
  (element) =>
    createRoot(element).render(
      <Provider store={store}>
        {/* <App /> */}
        <Home />
      </Provider>
    ),
  (err) => alert(err)
);
