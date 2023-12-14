import { useEffect } from "react";

interface ModalItemlistProps extends React.LiHTMLAttributes<HTMLLIElement> {
  text: string;
  onClose: Function;
  rollSectionFunction: (e: any) => void
}

const ModalItemlist: React.FC<ModalItemlistProps> = ({ 
  text, 
  onClose, 
  rollSectionFunction, 
  ...rest  
}) => {

  function handleItemClick() {
    onClose(); // Chame a função onClose para fechar o modal
  }

  return (
    <li
      className="
      text-nav-color 
      mx-3 px-2 
      font-normal 
      menu-text-size 
      text-center 
      m-3 
      cursor-pointer"
      onClick={(e) => {
        handleItemClick();
        rollSectionFunction(e);
      }} 
      {...rest}
    >
      {text}
    </li>
  );
};

export default ModalItemlist;
