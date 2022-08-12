import styled from "styled-components";

interface Props {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string | "black";
  block?: boolean | false;
}

const FONT_SIZE_MAP = {
  1: "5.5rem",
  2: "4.0rem",
  3: "2.5rem",
  4: "1.5rem",
  5: "1rem",
  6: "0.7rem",
};

const HeadingStyled = styled.span<Props>`
  font-weight: bolder;
  color: ${(props) => props.color};
  font-size: ${(props) => FONT_SIZE_MAP[props.size]};
  display: ${(props) => (props.block ? "block" : "inline")};
`;
export default HeadingStyled;
