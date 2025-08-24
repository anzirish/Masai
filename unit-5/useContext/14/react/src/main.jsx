import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import { Provider } from "./components/ui/provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ThemeContextProvider>
        <AuthContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  </StrictMode>
);
