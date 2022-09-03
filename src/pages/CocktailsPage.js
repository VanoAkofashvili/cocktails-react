import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function CocktailsPage() {
  const [isAlcoholic, setIsAlcoholic] = useState(true);

  return (
    <div className={"flex gap-5 h-full"}>
      <div className={"w-96 flex-shrink-0 bg-blue-300"}>
        <Sidebar isAlcoholic={isAlcoholic} setIsAlcoholic={setIsAlcoholic} />
      </div>
      <Outlet />
    </div>
  );
}

export default CocktailsPage;
