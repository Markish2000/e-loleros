import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  setUser(localStorage.getItem('user'));

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', newUser);
  };

  return (
    <UserProvider.Provider value={{ user, updateUser }}>
      {children}
    </UserProvider.Provider>
  );
};

export { UserContext, UserProvider };
