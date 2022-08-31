import Button from "./Button";

function Sidebar({ isAlcoholic, setIsAlcoholic }) {
  return (
    <div className={"flex flex-col p-4 gap-4"}>
      <Button isActive={isAlcoholic} onClick={() => setIsAlcoholic(true)}>
        Alcoholic
      </Button>
      <Button isActive={!isAlcoholic} onClick={() => setIsAlcoholic(false)}>
        Non Alcoholic
      </Button>
    </div>
  );
}

export default Sidebar;
