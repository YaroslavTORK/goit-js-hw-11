import axios from 'axios';

const API_KEY = '52822866-647b6b4c94b7d4074c4dcbe1c'; 

const api = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export function getImagesByQuery(query) {
  return api
    .get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(({ data }) => data)
    
    .catch((err) => {
      throw err;
    });
}


