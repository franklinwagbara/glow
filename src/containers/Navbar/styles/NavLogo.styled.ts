import styled from "styled-components";

const NavLogoStyled = styled.div`
  flex: 1;

  & span {
    font-size: 2rem;
    font-weight: bold;
  }

  & div {
    display: inline-block;
    background-color: #f3693c;
    height: 8px;
    width: 8px;
    margin-left: 2px;
    border-radius: 50%;
  }
`;

export default NavLogoStyled;
