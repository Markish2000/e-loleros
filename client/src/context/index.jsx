import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <GlobalContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </GlobalContext.Provider>
  );
};
