import React from "react";

// Création du contexte
const AppContext = React.createContext();

// Fournisseur de contexte
const AppProvider = function ({ children }) {
// Définition de l'état du thème et de l'expansion
  const [theme, setTheme] = React.useState("light");
  const [isExpanded, setExpanded] = React.useState(false);

  // Fonctions pour basculer le thème et l'expansion
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const toggleExpanded = () => setExpanded((prevState) => !prevState);

  const closeExpanded = function () {
    setTimeout(function () {
      setExpanded(false);
    }, 250);
  };

// Rendu du fournisseur de contexte
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isExpanded,
        toggleExpanded,
        closeExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useAppContext = () => React.useContext(AppContext);

export { AppContext, AppProvider };
