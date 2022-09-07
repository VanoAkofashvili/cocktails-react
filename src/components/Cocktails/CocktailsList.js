import { useQuery } from "../../hooks/useQuery";
import Cocktail from "./Cocktail";
import { API_URL } from "../../constants";

function CocktailsList() {
  const {
    data: allCocktails,
    error,
    loading,
  } = useQuery({ url: `${API_URL}/filter.php?a=Alcoholic` });

  const drinks = allCocktails?.drinks || [];

  return (
    <div className={"flex flex-wrap gap-4"}>
      {drinks.map((cocktail) => (
        <Cocktail cocktail={cocktail} key={cocktail.idDrink} />
      ))}
    </div>
  );
}

export default CocktailsList;
