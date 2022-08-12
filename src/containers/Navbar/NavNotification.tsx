import { BsBag } from "react-icons/bs";
import NavNotificationStyled from "./styles/NavNotification.styled";

type Props = {
  count: number | string;
};
const NavNotification = ({ count }: Props): JSX.Element => {
  return (
    <NavNotificationStyled>
      <BsBag />
      <span>{count}</span>
    </NavNotificationStyled>
  );
};

export default NavNotification;
