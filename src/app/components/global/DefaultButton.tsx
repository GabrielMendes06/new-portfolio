interface DefaultButtonProps {
    text: string;
    link: string;
    className?: string;
}

const DefaultButton:React.FC<DefaultButtonProps> = ({ text, link, className }) => {
    return(
        <a href={link} className={`text-light info-button ${className}`} target="_blank">{text}</a>
    )
}

export default DefaultButton