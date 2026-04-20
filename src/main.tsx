import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { ThemeProvider } from "./components/theme/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>,
);
