import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const EditPokemon = ({ pokemons, updatePokemon }) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (pokemons[id - 1]) {
            setName(pokemons[id - 1].name);
        }
    }, [id, pokemons]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePokemon(Number(id - 1), name);
        navigate('/');
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newPokemon = { name };
    //     updatePokemon(newPokemon).then(() => {
    //       navigate('/');
    //     });
    //  };

    return (
        <Container>
            <h1>Editar Pokemon</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="pokemonName">
                    <Form.Label>Nombre del pokemon</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Editar pokemon</Button>
            </Form>
        </Container>
    );
};

export default EditPokemon;
