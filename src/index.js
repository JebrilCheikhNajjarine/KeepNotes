import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./dark&lightMode/ThemeContext";
import Background from "./dark&lightMode/Background";
import Toggle from "./dark&lightMode/ThemeToggle";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="h-screen bg-white dark:bg-primary  ">
    <React.StrictMode>
      <ThemeProvider>
        <Background>
          <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
          <App />
        </Background>
      </ThemeProvider>
      ,
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
