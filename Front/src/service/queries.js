import axios from "axios"
const URL = "https://rickandmortyapi.com/api/character"
 
export const consulta = async () => {
 try {
    const respuesta= await axios.get(URL)
    return respuesta.data.results;
 } catch (error) {
    console.log(error);
 }
};