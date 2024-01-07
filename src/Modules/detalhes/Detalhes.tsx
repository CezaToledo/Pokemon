import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsPoke } from "../../APIs/pokemons/Poke";
import { intDetalhesPokemon } from "../../APIs/interfaces/interfaces";

const Detalhes = () => {
  const [detalhes, setDetalhes] = useState<intDetalhesPokemon>();

  const { id } = useParams();
  const getDetails = async function (id: any) {
    const response = await getDetailsPoke(id);
    setDetalhes(response);
  };

  useEffect(() => {
    getDetails(id);
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default Detalhes;
