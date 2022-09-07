import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({
  user: null,
});

export const useAuth = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // send request to the backend service with the provided token
      // fetch
      const user = {
        id: "d46f7618-1523-491b-8ffa-7d9ad5ab87b1",
        firstName: "John",
        lastName: "asdf",
        email: "vanikoakofa@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNDZmNzYxOC0xNTIzLTQ5MWItOGZmYS03ZDlhZDVhYjg3YjEiLCJlbWFpbCI6InZhbmlrb2Frb2ZhQGdtYWlsLmNvbSIsImlhdCI6MTY2MjU2NDE4NywiZXhwIjoxNjYyNjM2MTg3fQ.Z_cHln6ekNDzbVSzqfRx_F7jUY3bYPnLtVLGbhi7dc8",
      };

      setCurrentUser(user);
      setToken(user.token);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        token: token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
