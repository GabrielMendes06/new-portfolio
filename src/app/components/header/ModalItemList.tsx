interface ModalItemlistProps extends React.LiHTMLAttributes<HTMLLIElement> {
    text: string
}

const ModalItemlist: React.FC<ModalItemlistProps> = ({text, ...rest}) => {
    return <li className="text-nav-color mx-3 px-2 font-normal text-lg text-center m-3 cursor-pointer" {...rest}>{text}</li>
}

export default ModalItemlist