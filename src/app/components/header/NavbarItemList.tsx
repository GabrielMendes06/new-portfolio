import { useState, useEffect } from "react";



interface NavbarItemListProps extends React.LiHTMLAttributes<HTMLLIElement> {
  text: string;
}

const NavbarItemList: React.FC<NavbarItemListProps> = ({ text, ...rest }) => {

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
      className={`${scrolled ? 'text-light' : 'text-nav-color'} mx-3 px-2 nav-item-animation font-normal text-lg`}
      {...rest}
    >
      {text}
    </li>
  );

};

export default NavbarItemList;
