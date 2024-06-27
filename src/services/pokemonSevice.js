import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemons = () => {
    return axios.get(`${API_URL}?limit=20`);
};

export const getDetailPokemon = (id) => {
    return axios.get(`${API_URL}${id}`);
};

export const addPokemon = (pokemon) => {
    return axios.post(API_URL, pokemon);
};

export const updatePokemon = (id, updatedPokemon) => {
    return axios.patch(`${API_URL}${id}`, updatedPokemon);
};

export const deletePokemon = (id) => {
    return axios.delete(`${API_URL}${id}`);
};
