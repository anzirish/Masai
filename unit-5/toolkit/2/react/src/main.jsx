import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider";
import { Provider as ReducProvider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReducProvider store={store}>
      <Provider>
        <App />
      </Provider>
    </ReducProvider>
  </StrictMode>
);
