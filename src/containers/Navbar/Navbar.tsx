import { NavLogo, NavNotification } from "../index";
import NavbarStyled from "./styles/Navbar.styled";

interface Props {
  children?: React.ReactNode;
}

const Navbar = ({ children }: Props): JSX.Element => {
  return (
    <NavbarStyled>
      <NavLogo />
      <ul>{children}</ul>
      <NavNotification count={1} />
    </NavbarStyled>
  );
};

export default Navbar;
