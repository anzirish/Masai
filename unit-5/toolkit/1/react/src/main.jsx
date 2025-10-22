import { Provider } from "./components/ui/provider";
import { Provider as ReduxProvider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Provider>
        <App />
      </Provider>
    </ReduxProvider>
  </React.StrictMode>
);
