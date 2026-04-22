import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index.ts";
import { ThemeProvider } from "./components/theme/ThemeProvider.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         
        < TooltipProvider>     
          <App />
        </TooltipProvider> 
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
