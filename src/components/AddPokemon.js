import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const AddPokemon = ({ addNewPokemon }) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPokemon = { name };
        addNewPokemon(newPokemon);
        navigate('/');
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newPokemon = { name };
    //     addPokemon(newPokemon).then(() => {
    //       navigate('/');
    //     });
    //  };

    return (
        <Container>
            <h1>Crear nuevo pokemon</h1>
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
                <Button variant="primary" type="submit" className="mt-3">Añadir Pokemon</Button>
            </Form>
        </Container>
    );
};

export default AddPokemon;
