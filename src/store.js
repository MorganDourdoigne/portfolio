// Importation de la fonction configureStore de la bibliothèque Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importation des réducteurs
import homeReducer from "./pages/homeSlice";
import allProjectsReducer from "./pages/allProjectsSlice";

// Création du store Redux
export const store = configureStore({
  reducer: {
// Ajout des réducteurs au store
    home: homeReducer,
    allProjects: allProjectsReducer,
  },
});
