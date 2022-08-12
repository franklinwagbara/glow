import ButtonStyled from "./styles/Button.styled";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GrPlayFill } from "react-icons/gr";

interface Props {
  children: React.ReactNode;
  type?: "contained" | "outlined" | "none";
  color: string | "#f3693c";
}

const Button = ({ children, type, color }: Props): JSX.Element => {
  return (
    <ButtonStyled typex={type} color={color}>
      {type === "none" && <GrPlayFill />}
      {children} {type !== "none" ? <HiOutlineArrowNarrowRight /> : ""}
    </ButtonStyled>
  );
};

export default Button;
