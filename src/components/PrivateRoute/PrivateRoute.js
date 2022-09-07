import { useAuth } from "../../contexts/Auth";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, token } = useAuth();

  if (!token) {
    return <Navigate to={"/auth"} />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
