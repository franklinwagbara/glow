import TextStyled from "./styles/Text.styled";

interface Props {
  children: React.ReactNode;
  color?: string | "black";
  size?: number;
  block?: boolean | false;
}

const Text = ({ children, color, size, block }: Props): JSX.Element => {
  return (
    <TextStyled color={color} size={size} block={block}>
      {children}
    </TextStyled>
  );
};

export default Text;
