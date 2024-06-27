import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonContainer from './components/PokemonContainer';
import PokemonDetail from './components/PokemonDetail';
import { Navbar, Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Navbar className="custom-navbar-bg">
        <Container>
          <Navbar.Brand href="/">Pokemon CRUD</Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/*" element={<PokemonContainer />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
