import "../../resources/css/header/header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarItemList from "./NavbarItemList";
import NavbarModal from "./NavbarModal";
import Image from "next/image";
import M from '../../resources/images/header/m.svg'
import Mwhite from '../../resources/images/header/m-white.svg'
import Endes from '../../resources/images/header/endes.svg'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import DefaultButton from "../global/DefaultButton";

export default function OnlyHeader() {

  const [theme, setTheme] = useState<string>("dark-theme")
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);

  //Propriedades de animação
  const showVariant = {
    hidden: {
      opacity: 0,
      x: -30,
      transition: {
        duration: 0.5,       
      }
    },
    show: {
      opacity: [0, 0, 0, 1],
      x: 105,
      transition: {
        duration: 0.5,
        times: [0, 0.3, 0.6, 1]
      }
    }
  }

  const handleNavClick = (e: any, id: any) => {
    e.preventDefault();
    const section = document.querySelector(`#${id}`);

    if (section instanceof HTMLElement) {
      const offsetTop = section.offsetTop - 100; // 50 pixels acima da seção
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

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
      <Container className="
      text-light 
      flex-nowrap 
      navbar-container">
        <div
          onClick={(e) => handleNavClick(e, 'home')}
          className="
        d-flex
        position-relative
        "
          onMouseEnter={() => {
            setHover(true)
          }}
          onMouseLeave={() => setHover(false)
          }>
          <Image
            src={scrolled ? Mwhite : M} 
            alt="logo"
            width={90}
            onClick={(e) => handleNavClick(e, 'home')}
            className="logo ms-3"
          />
        </div>
        <path></path>
        <Nav>
          <div className="d-flex me-4 align-items-center">
            <NavbarItemList text="Sobre mim" href="#about" onClick={(e) => handleNavClick(e, 'about')} />
            <NavbarItemList text="Habilidades" href="#skills" onClick={(e) => handleNavClick(e, 'skills')} />
            <NavbarItemList text="Experiências" href="#experience" onClick={(e) => handleNavClick(e, 'experience')} />
            <NavbarItemList text="Projetos" href="#projects" onClick={(e) => handleNavClick(e, 'projects')} />
            <NavbarItemList text="Contato" href="#contact" onClick={(e) => handleNavClick(e, 'contact')} />
            
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
            <i className="
            bi 
            bi-brightness-high-fill 
            sun-icon"></i>
            <i className="
            bi 
            bi-moon-fill 
            moon-icon"></i>
            <span className="toggle"></span>
          </label>
        </motion.div>

      </Container>
    </Navbar>
  );
}
