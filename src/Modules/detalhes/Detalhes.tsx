import { useEffect, useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { useParams } from "react-router-dom";
import { getDetailsPoke } from "../../APIs/pokemons/Poke";
import { MdOutlineNavigateNext } from "react-icons/md";
import { intDetalhesPokemon } from "../../APIs/interfaces/interfaces";

const Detalhes = () => {
  const [detalhes, setDetalhes] = useState<intDetalhesPokemon>();

  const params = useParams<{ id: string }>();
  const id = params?.id || '';
  
  const handlePreviousPokemon = () =>{
    const nextId = parseInt(id) - 1;
    
    window.history.pushState(null, '', `/detalhes/${nextId}`);
  
    window.location.reload();
  };

  const handleNextPokemon = () => {
    const nextId = parseInt(id) + 1;
    
    window.history.pushState(null, '', `/detalhes/${nextId}`);
    
    window.location.reload();
  };
  
  const getDetails = async function (id: any) {
    const response = await getDetailsPoke(id);
    setDetalhes(response);
  };

  useEffect(() => {
    getDetails(id);
    console.log(detalhes)
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center pl-3 ">
        <div className="flex items-center gap-4 text-2xl" >
          <h1 className="text-2xl ">{detalhes?.name}</h1>
        </div>
        <p>#{detalhes?.id}</p>
      </div>
      <div className="flex justify-center">
        <img src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${id}.gif`} alt="" />
      </div>

      <div className="flex wrap w-[full] h-16 justify-center">
        <div className=" w-[30%] text-sm text-center flex flex-col justify-around ">{detalhes?.weight}
          <p className="text-xs text-gray-500 text-center">Height</p>
        </div>
        <div className="border border-y-0  w-[30%] text-sm text-center flex flex-col justify-around">{detalhes?.height}
          <p className=" text-gray-500 text-xs text-center">Height</p></div>
        <div className="  w-[30%] text-sm text-center flex flex-col justify-around">{detalhes?.abilities.map((items, index) => (
          <div>
            {items.ability.name}
          </div>
        )
        )}
          <p className=" text-gray-500 text-xs text-center">Moves</p></div>
      </div>
      <p className="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem a ipsa optio vero qui, consequuntur odit corporis autem nisi </p>
      <h2 className="text-center text-xl text-green-600">Base Stats</h2>
      <div className=" flex flex-wrap ">
        <div className="flex flex-col border-r pr-2 mr-2 text-green-600">
          <p>HP</p>
          <p>ATK</p>
          <p>DEF</p>
          <p>SATK</p>
          <p>SDEF</p>
          <p>SPD</p>
        </div>
        <div>{detalhes?.stats.map((itens, index) => (
          <div className="   ">
            0{itens.base_stat}
          </div>
        ))}
        </div>
        <div>


        </div>

      </div>
      <button className=" hover:bg-green-500 rounded-lg p-2 absolute left-0 top-[40%]  text-green-600 text-2xl" onClick={handlePreviousPokemon}> <MdOutlineNavigateBefore /></button>
      <button className=" hover:bg-green-500 rounded-lg p-2 absolute right-0 top-[40%]  text-green-600 text-2xl" onClick={handleNextPokemon}> <MdOutlineNavigateNext /></button>
    </div>
  );
};

export default Detalhes;
