// Importation des bibliothèques nécessaires
import React from "react";
import ReactDOM from "react-dom/client";

import { AppProvider } from "./appContext";

import { Provider } from "react-redux";
import { store } from "./store";

import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Création d'une racine pour le rendu
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application dans la racine
root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
);

// Enregistrement du service worker pour permettre à l'application de fonctionner hors ligne et de se charger plus rapidement
serviceWorkerRegistration.register();
