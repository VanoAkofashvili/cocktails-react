import { Link } from "react-router-dom";

function Cocktail({ cocktail }) {
  const { strDrink, strDrinkThumb } = cocktail;

  return (
    <Link to={`/cocktails/${cocktail.idDrink}`}>
      <div className={"flex flex-col"}>
        <img
          className={"w-96"}
          src={strDrinkThumb}
          alt={"cocktail - " + strDrink}
        />
        <span>{strDrink}</span>
      </div>
    </Link>
  );
}

export default Cocktail;
