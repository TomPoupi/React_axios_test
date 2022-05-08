import axios from 'axios';


const publicRequest = axios.create({
    baseURL: 'https://api.github.com',
});

//permet d'avoir la liste des équipement de la bdd(utilisé: Catalogue.js)
export const getListUsers = () => {
    return publicRequest.get('/users/mapbox/followers')
        .then(response => {
            return {
                data: response.data,
            };
        })
        .catch(error =>{console.log(error)});
};

