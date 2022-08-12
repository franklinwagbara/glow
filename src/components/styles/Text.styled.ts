import styled from "styled-components";

interface Props {
  color?: string | "black";
  size?: number;
  block?: boolean | false;
}
const TextStyled = styled.span<Props>`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : 1)}rem;
  display: ${(props) => (props.block ? "block" : "inline")};
  line-height: 1.2rem;
`;
export default TextStyled;
