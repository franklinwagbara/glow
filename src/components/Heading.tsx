import HeadingStyled from "./styles/Heading.styled";

export interface Props {
  children?: React.ReactNode;
  size: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string | "black";
  block?: boolean | false;
}

const Heading = ({ children, size, color, block }: Props): JSX.Element => {
  return (
    <HeadingStyled size={size} color={color} block={block}>
      {children}
    </HeadingStyled>
  );
};
export default Heading;
