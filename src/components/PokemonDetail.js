import React, { useEffect, useState } from 'react';
import { getDetailPokemon } from '../services/pokemonSevice';
import { useParams } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        getDetailPokemon(id).then(response => {
            setPokemon(response.data);
        });
    }, [id]);

    if (!pokemon) return <div>Loading...</div>;

    return (
        <Container>

            <div className='grid-div'>
                <div className='Detalle'>
                    Detalle Pokemon
                </div>
                <div className='information'>
                    <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <h1>{pokemon.name}</h1>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                </div>
            </div>

            <Button variant="info" className='btn-Info back-btn'>
                <Link to="/">Regresar</Link>
            </Button>

        </Container>
    );
};

export default PokemonDetail;
