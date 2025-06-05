import { useEffect, useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailsPoke } from "../../APIs/pokemons/Poke";
import { intDetalhesPokemon } from "../../APIs/interfaces/interfaces";

const Detalhes = () => {
  const [detalhes, setDetalhes] = useState<intDetalhesPokemon | undefined>();

  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const id = params?.id || '';

  const handlePreviousPokemon = () => {
    const currentId = parseInt(id);
    if (currentId > 1) {
      const prevId = currentId - 1;
      navigate(`/detalhes/${prevId}`);
    } else {
      console.log('No previous Pokémon');
    }
  };

  const handleNextPokemon = () => {
    const nextId = parseInt(id) + 1;
    navigate(`/detalhes/${nextId}`);
  };

  const getDetails = async (pokeId: string) => {
    const response = await getDetailsPoke(pokeId);
    setDetalhes(response);
  };

  useEffect(() => {
    getDetails(id);
  }, [id]);

  return (
    <div className="flex flex-col gap-4 relative p-4">
      <div className="flex flex-row justify-between items-center pl-3">
        <div className="flex items-center gap-4 text-2xl">
          <h1 className="capitalize text-2xl">{detalhes?.name}</h1>
        </div>
        <p>#{detalhes?.id}</p>
      </div>

      <div className="flex justify-center">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={`Pokémon ${detalhes?.name}`}
          className="max-h-64 object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-wrap w-full h-16 justify-center">
        <div className="w-[30%] text-sm text-center flex flex-col justify-around">
          {detalhes?.weight}
          <p className="text-xs text-gray-500 text-center">Weight</p>
        </div>

        <div className="border border-y-0 w-[30%] text-sm text-center flex flex-col justify-around">
          {detalhes?.height}
          <p className="text-gray-500 text-xs text-center">Height</p>
        </div>

        <div className="w-[30%] text-sm text-center flex flex-col justify-around">
          {detalhes?.abilities.map((item, index) => (
            <p key={index}>{item.ability.name}</p>
          ))}
          <p className="text-gray-500 text-xs text-center">Abilities</p>
        </div>
      </div>

      <h2 className="text-center text-xl text-green-600">Base Stats</h2>

      <div className="flex flex-wrap">
        <div className="flex flex-col border-r pr-2 mr-2 text-green-600">
          <p>HP</p>
          <p>ATK</p>
          <p>DEF</p>
          <p>SATK</p>
          <p>SDEF</p>
          <p>SPD</p>
        </div>

        <div>
          {detalhes?.stats.map((item, index) => (
            <div key={index}>{item.base_stat}</div>
          ))}
        </div>
      </div>

      <button
        className="hover:bg-green-500 rounded-lg p-2 absolute left-0 top-[40%] text-green-600 text-2xl"
        onClick={handlePreviousPokemon}
        aria-label="Previous Pokémon"
      >
        <MdOutlineNavigateBefore />
      </button>

      <button
        className="hover:bg-green-500 rounded-lg p-2 absolute right-0 top-[40%] text-green-600 text-2xl"
        onClick={handleNextPokemon}
        aria-label="Next Pokémon"
      >
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
};

export default Detalhes;
