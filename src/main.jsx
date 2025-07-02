import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="957921508047-s2h9tvhum4h9mfe0uj4mqfnqflmd9sul.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
  </React.StrictMode>
);
