import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Sidebar({ isAlcoholic, setIsAlcoholic }) {
  return (
    <div className={"flex flex-col p-4 gap-4"}>
      <Button isActive={isAlcoholic} onClick={() => setIsAlcoholic(true)}>
        Alcoholic
      </Button>
      <Button isActive={!isAlcoholic} onClick={() => setIsAlcoholic(false)}>
        Non Alcoholic
      </Button>
      <Link to={"/favorite-cocktail"}>
        <Button>Fav Cocktail</Button>
      </Link>
    </div>
  );
}

export default Sidebar;
