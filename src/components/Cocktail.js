function Cocktail({ cocktail }) {
  const { strDrink, strDrinkThumb } = cocktail;

  return (
    <div className={"flex flex-col"}>
      <img
        className={"w-96"}
        src={strDrinkThumb}
        alt={"cocktail - " + strDrink}
      />
      <span>{strDrink}</span>
    </div>
  );
}

export default Cocktail;
