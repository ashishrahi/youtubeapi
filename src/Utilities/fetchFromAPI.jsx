import axios from 'axios';

const BASE_URL ='https://youtube-v31.p.rapidapi.com';

const options = {
  
  url:BASE_URL,

  params: {
    maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key': '6c206f9b46msh4eea05321f9c1c7p1d561fjsn0ce064618169',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url)=>{
 const {data} = await axios.get(`${BASE_URL}/${url}`,options)
return data;
}