import { useParams } from "react-router";

function Detail() {
  const { pokemon } = useParams<{ pokemon: string }>();

  return <h2>{pokemon}</h2>;
}

export default Detail;
