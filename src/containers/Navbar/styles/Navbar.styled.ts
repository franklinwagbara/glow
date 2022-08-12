import styled from "styled-components";

const NavbarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & ul {
    display: inline-block;
    list-style: none;
  }

  & li {
    display: inline-block;
    margin: 1.2rem;
    font-weight: bold;
  }
`;

export default NavbarStyled;
