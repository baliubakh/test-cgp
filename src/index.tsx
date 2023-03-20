import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 768,
      md: 992,
      lg: 1400,
      xl: 1800,
    },
  },

  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#F6F9FE",
    },
    info: {
      main: "#E4E6F1",
      light: "#F5F5FC",
      dark: "#D9E7FF",
    },
    secondary: {
      main: "#4368E0",
      dark: "#449CF4",
      light: "#147de5",
    },
    success: {
      main: "#68C2E9",
      light: "#4B97B8",
    },
    text: {
      primary: "#252A32",
      secondary: "#97AACD",
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test-cgp">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
