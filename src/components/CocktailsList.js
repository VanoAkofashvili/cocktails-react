import Cocktail from "./Cocktail";

function CocktailsList({ list }) {
  return (
    <div className={"flex flex-wrap gap-4"}>
      {list.map((cocktail) => (
        <Cocktail cocktail={cocktail} key={cocktail.idDrink} />
      ))}
    </div>
  );
}

export default CocktailsList;
