import styled from "styled-components";

const primaryColor = "#f3693c";

const NavNotificationStyled = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: white;
  margin-right: 1rem;
  cursor: pointer;

  & :not(style) {
    margin-right: -25%;
  }
  & span {
    position: relative;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    transform: translate(50%, -50%);
    background: black;
    border: 1px solid white;
    font-size: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default NavNotificationStyled;
