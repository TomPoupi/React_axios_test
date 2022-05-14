import axios from 'axios';


const publicRequest = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});


//permet d'avoir la liste des équipement de la bdd(utilisé: Catalogue.js)
export const getListUsers = () => {
    return publicRequest.get('/users')
        .then(response => {
            return {
                data: response.data,
            };
        })
        .catch(error =>{console.log(error)});
};


export const getOneUser = (id) => {
    return publicRequest.get(`/users/${id}`)
        .then(response => {
            return {
                data: response.data,
            };
        })
        .catch(error =>{console.log(error)});
};

