import { Route, Routes } from "react-router-dom";

import CocktailsPage from "./pages/CocktailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import CocktailsList from "./components/CocktailsList";
import CocktailDetails from "./components/CocktailDetails";

export default function App() {
  return (
    <Routes>
      <Route path={"/cocktails"} element={<CocktailsPage />}>
        <Route index element={<CocktailsList />} />
        <Route path=":drinkId" element={<CocktailDetails />} />
      </Route>

      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
}
