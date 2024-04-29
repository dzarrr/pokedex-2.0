import { useParams } from "react-router";
import { Card } from "antd";
import { useRequest } from "ahooks";

import PokemonTypeTag from "../../components/PokemonTypeTag";
import getPokemon from "../../services/getPokemon";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

function Detail() {
  const { pokemon } = useParams<{ pokemon: string }>();

  const { data: pokemonData, loading } = useRequest(() =>
    getPokemon({ name: pokemon }),
  );

  return (
    <Card
      style={{ width: 300 }}
      loading={loading}
      cover={
        <img
          alt={`${pokemon}-sprite`}
          src={pokemonData?.data.sprites.front_default}
          height={300}
        />
      }
    >
      <h3>{capitalizeFirstLetter(pokemonData?.data.name)}</h3>
      <>
        {pokemonData?.data.types.map((type) => {
          return <PokemonTypeTag type={type.type.name} />;
        })}
      </>
      <p>{pokemonData?.data.weight}</p>
    </Card>
  );
}

export default Detail;
