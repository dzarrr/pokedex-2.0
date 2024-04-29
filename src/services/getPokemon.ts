import baseAxios from "./baseAxios";
import { PokemonType } from "../components/PokemonTypeTag";

interface GetPokemonRequest {
  name: string;
}

interface GetPokemonResponse {
  name: string;
  order: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: PokemonType;
    };
  }[];
  weight: number;
}

async function getPokemon({ name }: GetPokemonRequest) {
  const response = await baseAxios.get<GetPokemonResponse>(`pokemon/${name}`);

  console.log("response: ", response);
  return response;
}

export default getPokemon;
