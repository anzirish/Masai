import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { NotificationContextProvider } from "../provider/NotificationContextProvider.jsx";
import { NotificationList } from "../components/NotificationList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationContextProvider>
      <NotificationList>
        <App />
      </NotificationList>
    </NotificationContextProvider>
  </StrictMode>
);
