interface Props {
  value: string;
}

const NavItem = (props: Props): JSX.Element => {
  return <li>{props.value}</li>;
};

export default NavItem;
