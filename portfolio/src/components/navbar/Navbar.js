import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo.svg';

function Navigation() {
	return (
		<Navbar bg="transparent" expand>
			<Container fluid className="mx-5 py-4">
				<Navbar.Brand href="#home">
					<img className='logo' src={logo} alt="logo"></img>
				</Navbar.Brand>
				<Nav className='////////////////'>
					<Nav.Link className="text-dark" href='/about'>About</Nav.Link>
					<Nav.Link className="text-dark" href='/about'>Contact</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Navigation;