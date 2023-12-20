import { useState, useEffect } from "react";
interface NavbarItemListProps extends React.LiHTMLAttributes<HTMLLIElement> {
  text: string;
  href: string;
}

const NavbarItemList: React.FC<NavbarItemListProps> = ({ text, href, ...rest }) => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <li
      className={`mx-3 px-2 nav-item-animation font-normal text-lg  ${scrolled ? 'scrolled' : ''}`}
      {...rest}
    >
      <a href={href} className={`${scrolled ? 'text-light' : 'text-nav-color'}`}>{text}</a>  
    </li>
  );

};

export default NavbarItemList;
