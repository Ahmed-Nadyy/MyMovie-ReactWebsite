import axios from 'axios'




export let getDetails = async(id,media) => {
    // let{data} = await axios.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=52bbcddeda849047525b51d6f8a12361`);
    let{data} = await axios.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=52bbcddeda849047525b51d6f8a12361`);
    return data;
    }