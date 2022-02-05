import {Container} from 'react-bootstrap';
import './Header.css'

function Header() {
  return (
    <Container className="mt-4">
      <h1 className="display-1 header-text text-left mx-auto" style={{"max-width": "960px"}}>
        Hello, I'm omair
        <br></br>
        I'm a web developer
      </h1>
    </Container>
  );
};

export default Header;