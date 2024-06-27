import React, { useState, useEffect } from 'react';
import { getPokemons } from '../services/pokemonSevice';
import PokemonList from './PokemonList';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AddPokemon from './AddPokemon';
import EditPokemon from './EditPokemon';


const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons().then(response => {
            setPokemons(response.data.results);
        });
    }, []);

    const addNewPokemon = (newPokemon) => {
        setPokemons([...pokemons, newPokemon]);
    };

    const updatePokemon = (id, updatedName) => {
        setPokemons(pokemons.map((pokemon, index) =>
            index === id ? { ...pokemon, name: updatedName } : pokemon
        ));
    };

    const deletePokemon = (id) => {
        setPokemons(pokemons.filter((pokemon, index) => index !== id));
    };

    return (
        <Container>
            <Routes>
                <Route path="/" element={<PokemonList pokemons={pokemons} deletePokemon={deletePokemon} />} />
                <Route path="/add" element={<AddPokemon addNewPokemon={addNewPokemon} />} />
                <Route path="/edit/:id" element={<EditPokemon
                    pokemons={pokemons}
                    updatePokemon={updatePokemon} />
                } />
            </Routes>
        </Container>
    );
};

export default PokemonContainer;
