import { ReactNode, createContext, useContext, useState } from "react";

type UserProviderProps = {
  children: ReactNode;
}

const storageApplication = "solution@test";

interface UserContextProps {
  userName: string;
  handleChangeUserName: (name: string) => void;
  handleGetUserName: () => void;
}

const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userName, setUserName] = useState<string>(localStorage.getItem(storageApplication) || '');

  function handleChangeUserName(name: string) {
    setUserName(name);
    localStorage.setItem(storageApplication, JSON.stringify(name));
  }

  function handleGetUserName() {
    return userName;
  }

  return (
    <UserContext.Provider value={{
      userName,
      handleChangeUserName,
      handleGetUserName,
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);