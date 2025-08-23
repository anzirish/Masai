import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const SideBar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return <>{isLoggedIn && <p>Welcome user</p>}</>;
};
