import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./constants";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export default function App() {
  return (
    <Routes>
      {AppRoutes.map((route) => {
        if (route.private) {
          return (
            <Route
              key={route.key}
              path={route.path}
              element={<PrivateRoute>{route.component}</PrivateRoute>}
            />
          );
        } else {
          return (
            <Route
              key={route.key}
              path={route.path}
              element={<>{route.component}</>}
            />
          );
        }
      })}
    </Routes>
  );
}
