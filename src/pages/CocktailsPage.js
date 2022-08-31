import { useEffect, useState } from "react";
import CocktailsList from "../components/CocktailsList";
import Sidebar from "../components/Sidebar";

function CocktailsPage() {
  const [allCocktails, setAllCocktails] = useState([]);
  const [isAlcoholic, setIsAlcoholic] = useState(true);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${
        isAlcoholic ? "Alcoholic" : "Non_Alcoholic"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCocktails(data.drinks);
      });
  }, [isAlcoholic]);

  return (
    <div className={"flex gap-5"}>
      <div className={"w-96 flex-shrink-0 bg-blue-300"}>
        <Sidebar isAlcoholic={isAlcoholic} setIsAlcoholic={setIsAlcoholic} />
      </div>
      <CocktailsList list={allCocktails} />
    </div>
  );
}

export default CocktailsPage;
