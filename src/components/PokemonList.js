import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ConfirmDelete from './ConfirmDelete';


const PokemonList = ({ pokemons, deletePokemon }) => {

    const [showConfirm, setShowConfirm] = useState(false);
    const [pokemonToDelete, setPokemonToDelete] = useState(0)

    const handleDelete = (index) => {
        setPokemonToDelete(index)
        setShowConfirm(true)
    };

    const handleConfirmDelete = () => {
        deletePokemon(pokemonToDelete);
        setShowConfirm(false);
    };

    const handleCloseConfirm = () => {
        setShowConfirm(false);
        setPokemonToDelete(null);
    };


    return (
        <div className='container'>

            <Navbar expand="lg" className="custom-navbar-bg">
                <Container>
                    <Navbar.Brand href="#home">Lista de pokemones</Navbar.Brand>
                </Container>
            </Navbar>

            <Button variant="info" className='btn-Info'>
                <Link to="/add">Crear nuevo pokemon</Link>
            </Button>

            <Table striped bordered hover className='tableList'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((pokemon, index) => (
                        <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {pokemon.name}
                            </td>
                            <td className='btn-actions'>
                                <Button variant="success" className='btn-Success'>
                                    <Link to={`/pokemon/${index + 1}`}>Ver pokemon</Link>
                                </Button>

                                <Button variant="secondary" className='btn-Success'>
                                    <Link to={`/edit/${index + 1}`}>Editar pokemon</Link>
                                </Button>

                                <Button variant="danger" className='btn-Success' onClick={() => handleDelete(index)}>
                                    Eliminar pokemon
                                </Button>

                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>Total Pokemons</td>
                        <td colSpan={2}>{pokemons.length}</td>
                    </tr>
                </tfoot>
            </Table>

            <ConfirmDelete
                show={showConfirm}
                handleClose={handleCloseConfirm}
                handleConfirm={handleConfirmDelete}
            />



        </div>
    );
};

export default PokemonList



