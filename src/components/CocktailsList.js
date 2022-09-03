import Cocktail from "./Cocktail";
import { useEffect, useState } from "react";

function CocktailsList() {
  const [allCocktails, setAllCocktails] = useState([]);
  const [isAlcoholic, setIsAlcoholic] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_API_URL}/filter.php?a=${
        isAlcoholic ? "Alcoholic" : "Non_Alcoholic"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.drinks);
        setAllCocktails(data.drinks);
      })
      .finally(() => setLoading(false));
  }, [isAlcoholic]);

  return (
    <div className={"flex flex-wrap gap-4"}>
      {allCocktails.map((cocktail) => (
        <Cocktail cocktail={cocktail} key={cocktail.idDrink} />
      ))}
    </div>
  );
}

export default CocktailsList;
