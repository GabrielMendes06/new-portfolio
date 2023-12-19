import { ReactNode } from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string | ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className, ...rest }) => {
  return (
    <p className={`default-text font-normal text-lg ${className}`}{...rest}>
      {text}
    </p>
  );
};

export default Paragraph;
