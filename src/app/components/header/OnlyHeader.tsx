import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../resources/css/header/header.css";
import NavbarItemList from "./NavbarItemList";
import NavbarModal from "./NavbarModal";
import Paragraph from "../global/Paragraph";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

export default function OnlyHeader() {

  const [theme, setTheme] = useState<string>("dark-theme")
  const [scrolled, setScrolled] = useState(false);
  const verification = scrolled ? 'text-light' : 'default-text'

  useEffect(() => {
    setTheme(document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    }
        // Adiciona o ouvinte de evento
        window.addEventListener('scroll', handleScroll);

        // Limpeza do ouvinte de evento
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

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
    <Navbar expand="lg" className={`position-fixed w-100 ${scrolled ? 'navbar-scroll' : ""}`}>
      <Container className="text-light flex-nowrap">
        <div>
          <Paragraph
            className={`${verification} m-0 p-4`}
            text='Gabriel Mendes' />
        </div>
        <Nav>
          <div className="d-flex me-4 align-items-center">
            <NavbarItemList text="Início" />
            <NavbarItemList text="Sobre mim" />
            <NavbarItemList text="Conhecimentos" />
            <NavbarItemList text="Projetos" />
            <NavbarItemList text="Contato" />
            <NavbarModal />
          </div>
        </Nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1]
          }}
          transition={{ duration: 1.5 }}>
          <label className="theme-button">
            <input type="checkbox" className="theme-checkbox" onClick={() => toggleTheme()} />
            <i className="bi bi-brightness-high-fill sun-icon"></i>
            <i className="bi bi-moon-fill moon-icon"></i>
            <span className="toggle"></span>
          </label>
        </motion.div>

      </Container>
    </Navbar>
  );
}
