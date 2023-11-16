import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../resources/css/header/header.css";
import NavbarItemList from "./NavbarItemList";
import NavbarModal from "./NavbarModal";
import Paragraph from "../global/Paragraph";
import { useEffect, useState } from "react";

export default function OnlyHeader() {

  const [theme, setTheme] = useState<string>("dark-theme")

  useEffect(() => {
    setTheme(document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
  }, []);

  function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      setTheme('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      setTheme('dark-theme');
    }
  }

  return (
    <Navbar expand="lg" className="bg-black-style position-fixed w-100">
      <Container className="text-light flex-nowrap">
        <div>
          <Paragraph
            className="default-text m-0 p-4"
            text='Gabriel Mendes' />
        </div>
        <label className="theme-button">
          <input type="checkbox" className="theme-checkbox" onClick={() => toggleTheme()} />
          <i className="bi bi-brightness-high-fill sun-icon"></i>
          <i className="bi bi-moon-fill moon-icon"></i>
          <span className="toggle"></span>
        </label>
        <Nav>
          <div className="d-flex me-3 align-items-center">
            <NavbarItemList text="Início" />
            <NavbarItemList text="Sobre mim" />
            <NavbarItemList text="Conhecimentos" />
            <NavbarItemList text="Projetos" />
            <NavbarItemList text="Contato" />
            <NavbarModal />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
