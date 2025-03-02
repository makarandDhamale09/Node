import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      const { data } = axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
      setUser(data);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
