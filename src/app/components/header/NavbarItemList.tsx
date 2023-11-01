interface NavbarItemListProps extends React.HTMLProps<HTMLLIElement> {
    text: string
}

const NavbarItemList: React.FC<NavbarItemListProps> = ({text}) => {
    return <li className="text-nav-color mx-3 px-2 nav-item-animation font-normal text-lg hover:text-white">{text}</li>
}

export default NavbarItemList