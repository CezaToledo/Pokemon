import axios from "axios";

export interface interfaceGifsPoke {
    nome: string;
}



export async function getAllPokemons(): Promise<any> {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    return response.data
}

export async function getDetailsPoke(id:string) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return response.data
}

