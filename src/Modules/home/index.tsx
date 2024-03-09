import { createTheme } from '@mui/material/styles';
import { IoSearchOutline } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { getAllPokemons } from "../../APIs/pokemons/Poke";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@emotion/react';

interface allPokeInterface {
  name: string;
  url: string;
}


const Home = () => {

  const [poke, setPoke] = useState<any>([]);

  const navigate = useNavigate();

  const hundleDetalhesPokemon =(id: number) => {

    navigate(`detalhes/${id + 1}`);



  }


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

              borderBottom: '1px solid #fff', // Substitua "yourTextColor" pela cor desejada

            },

          },

          input: {

            color: '#fff', // Substitua "yourTextColor" pela cor desejada

          },

        },

      },

    },

  });
  



  const pokemons = async () => {

    const response = await getAllPokemons();

    const pokemonArray = response.results;

    setPoke(pokemonArray)

  };

  
  useEffect(() => {
    
    pokemons();


  }, []);

  return (
    <div className="
    flex flex-col
    m-1 md:m-3 lg:m-10
    justify-center
    items-center
    
    ">

        <nav className="p-5 w-[50%] auto items-center flex justify-center">
          
          <ThemeProvider theme={themeInputSearch}>
            
              <TextField     
              size='small'
              label={<IoSearchOutline size={20}  color='white' />}
              type="search"
              variant="standard"
              /* color="primary"  */
              fullWidth
              />
            
          </ThemeProvider>  
        
      
        </nav>
        
        
        <div className=" flex flex-wrap gap-4 justify-center   ">
        
          {poke.map((items: allPokeInterface, index:any) => (
          
            <div key={index} onClick={() => hundleDetalhesPokemon (index)} 
            className=" 
            lg:h-[400px] lg:w-[18%]
            md:h-[400px] md:w-[18%]
            justify-between
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
            duration-500 ...">
            
                <div className=" flex items-center">
            
                    <img src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${index + 1}.gif`} alt="" />
              
                    <img src="" alt="" />
            
                </div>
                       
                <h1 className="">{items.name}</h1>

            </div>

          ))}
      
        </div>

    </div>

  );

};
export default Home;
