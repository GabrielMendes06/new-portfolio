import { ReactNode } from "react";

interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string | ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className, ...rest }) => {
  return (
    <h1 className={`default-text mx-3 px-2 title mb-3 ${className}`} {...rest}>
      {text}
    </h1>
  );
};

export default Title;
