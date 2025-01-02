import axios from "axios";
const URL = "https://rickandmortyapi.com/api/character";

export const consulta = async () => {
  try {
    const respuesta =  await axios.get(URL);
    return respuesta.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const crearEquipo= async(equipo)=>{
  try {
    const respuesta = await axios.post(URL, equipo);
    return respuesta.data;
  }
  catch (error){
    console.log(error);
  }
}

