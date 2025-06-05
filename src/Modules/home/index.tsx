import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IoSearchOutline } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { getAllPokemons } from "../../APIs/pokemons/Poke";
import { useNavigate } from "react-router-dom";

interface AllPokeInterface {
  name: string;
  url: string;
}

// Helper to extract Pokémon ID from its URL
function getPokemonId(pokemonUrl: string): number {
  const parts = pokemonUrl.split('/').filter(Boolean);
  return Number(parts[parts.length - 1]);
}

const Home = () => {
  const [poke, setPoke] = useState<AllPokeInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const handleDetalhesPokemon = (id: number) => {
    navigate(`/detalhes/${id}`);
  };

  const themeInputSearch = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    },
    components: {
      MuiInput: {
        styleOverrides: {
          underline: {
            '&:before': {
              borderBottom: '1px solid #fff',
            },
          },
          input: {
            color: '#fff',
          },
        },
      },
    },
  });

  const fetchPokemons = async () => {
    try {
      const response = await getAllPokemons();
      setPoke(response.results);
    } catch (error) {
      console.error("Failed to fetch Pokemons", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // Filter Pokémon by name (case-insensitive)
  const filteredPoke = poke.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="
      flex flex-col
      m-1 md:m-3 lg:m-10
      justify-center
      items-center
    ">
      <nav className="p-5 w-[50%] flex justify-center">
        <ThemeProvider theme={themeInputSearch}>
          <TextField
            size="small"
            label={<IoSearchOutline size={20} color="white" />}
            type="search"
            variant="standard"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Pokémon"
          />
        </ThemeProvider>
      </nav>

      {loading ? (
        <p className="text-white text-xl">Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredPoke.length > 0 ? (
            filteredPoke.map((item) => {
              const id = getPokemonId(item.url);
              return (
                <div
                  key={id}
                  onClick={() => handleDetalhesPokemon(id)}
                  className="
                    lg:h-[400px] lg:w-[18%]
                    md:h-[400px] md:w-[18%]
                    h-[300px] w-[40%]
                    p-2 flex flex-col 
                    items-center border-[1px]
                    border-gray-600  
                    transition ease-in-out 
                    delay-75 
                    text-xl
                    text-white 
                    hover:text-black
                    hover:-translate-y-1 
                    hover:scale-102 
                    hover:bg-purple-200 
                    duration-500
                    cursor-pointer
                  "
                >
                  <div className="flex items-center">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                      alt={`Pokemon ${item.name}`}
                      loading="lazy"
                      className="max-h-40 object-contain"
                    />
                  </div>
                  <h1 className="capitalize mt-2">{item.name}</h1>
                </div>
              );
            })
          ) : (
            <p className="text-white text-xl">No Pokémon found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
