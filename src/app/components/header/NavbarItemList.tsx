interface NavbarItemListProps extends React.LiHTMLAttributes<HTMLLIElement> {
    text: string
}

const NavbarItemList: React.FC<NavbarItemListProps> = ({text, ...rest}) => {
    return <li className="text-stone-400 mx-3 px-2 nav-item-animation font-normal text-lg hover:text-white" {...rest}>{text}</li>
}

export default NavbarItemList