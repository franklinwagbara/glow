import styled from "styled-components";

interface Props {
  typex?: "contained" | "outlined" | "none";
  color?: string | "#f3693c";
}

const BORDER_RADIUS = 30;
const ButtonStyled = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  max-width: fit-content;
  gap: 0.3rem;
  background-color: ${(props) =>
    props.typex === "contained" ? props.color : "transparent"};
  border: ${(props) =>
    props.typex === "outlined" ? "1px solid " + props.color : "none"};
  padding: 0.8rem 1.3rem;
  color: ${(props) => (props.typex !== "contained" ? props.color : "white")};
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-top-right-radius: ${BORDER_RADIUS}px;
  cursor: pointer;
`;

export default ButtonStyled;
