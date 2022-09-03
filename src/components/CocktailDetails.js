import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cocktail from "./Cocktail";

function CocktailDetails() {
  const [data, setData] = useState(null);
  const { drinkId } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/lookup.php?i=${drinkId}`)
      .then((res) => res.json())
      .then((data) => setData(data.drinks[0]));
  }, []);

  if (!data) return <h1>Loading...</h1>;

  console.log(data);
  return (
    <div>
      <Cocktail cocktail={data} />
      <p>{data?.strInstructions}</p>
      <ul>
        {new Array(14).fill(null).map((_, i) => {
          return <li>{data[`strIngredient${i + 1}`]}</li>;
        })}
      </ul>
    </div>
  );
}

export default CocktailDetails;
