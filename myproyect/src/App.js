import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HunterTrackerFooder</h1>
        <Navbar collapseOnSelect bg="light" expand="lg" id="barranavegacion">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/myzone">Tu Zona</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Elige tu comida</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Cambia de zona
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Button variant="primary">Ver todas las foodtrucks de tu zona</Button>{''}
          </Container>
      </header>
    </div>


  );
}

export default App;
