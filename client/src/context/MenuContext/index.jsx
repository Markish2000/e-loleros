import { createContext, useContext, useEffect, useState } from 'react';

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

const MenuContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem('showMenu', showMenu);
  }, [showMenu]);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
