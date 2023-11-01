import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../resources/css/header/header.css'
import NavbarItemList from './NavbarItemList';


export default function OnlyHeader() {
    return(
          <Navbar expand="lg" className="bg-black-style position-fixed w-100" >
          <Container className='text-light'>
          <Navbar.Brand href="#home" className='text-light roboto m-4' style={{}}>React-Bootstrap</Navbar.Brand>
            <Nav className="ms-auto">
              <div className='d-flex me-5'>
                <NavbarItemList text='Início'/>
                <NavbarItemList text='Sobre mim'/>
                <NavbarItemList text='Conhecimentos'/>
                <NavbarItemList text='Projetos'/>
                <NavbarItemList text='Contato'/>
              </div>
            </Nav>
                </Container>
              </Navbar>
    )
}