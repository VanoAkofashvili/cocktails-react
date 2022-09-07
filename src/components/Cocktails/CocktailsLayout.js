import { useState } from "react";
import Sidebar from "./Sidebar";

function CocktailsLayout({ children }) {
  const [isAlcoholic, setIsAlcoholic] = useState(true);

  return (
    <div className={"flex gap-5 h-full"}>
      <div className={"w-96 flex-shrink-0 bg-blue-300"}>
        <Sidebar isAlcoholic={isAlcoholic} setIsAlcoholic={setIsAlcoholic} />
      </div>
      {children}
    </div>
  );
}

export default CocktailsLayout;
