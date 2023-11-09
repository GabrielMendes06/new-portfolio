interface NavbarItemListProps extends React.LiHTMLAttributes<HTMLLIElement> {
    text: string
}

const NavbarItemList: React.FC<NavbarItemListProps> = ({text, ...rest}) => {
    return <li className="text-nav-color mx-3 px-2 nav-item-animation font-normal text-lg" {...rest}>{text}</li>
}

export default NavbarItemList