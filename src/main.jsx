import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FirebaseProvider } from "./Context/FirebaseContext";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseProvider>
);
