import { MdCatchingPokemon } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const hundleGoHome = () =>{
    navigate("/")

  }
  
  return (
    <div onClick={hundleGoHome} className="{`fixed top-0 left-0 right-0 z-10 transition-all duration-300  w-full flex text-3xl md:text-4xl lg:text-6xl
      font-extrabold items-center gap-2 px-5 pt-5 md:m-5 lg:10  h-[80px ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}">
        <div>
          <MdCatchingPokemon />
        </div>
        <h1>Pokédex</h1>
    </div>
  );
};

export default Header;
