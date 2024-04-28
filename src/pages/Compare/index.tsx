import { useLocation } from "react-router";

function Compare() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const pokemons = searchParams.get("pokemons")?.split(",");

  return (
    <>
      <h3>Compare these pokemons: </h3>
      <ul>{pokemons?.map((pokemon) => <li>{pokemon}</li>)}</ul>
    </>
  );
}

export default Compare;
