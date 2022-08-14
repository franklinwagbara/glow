import styled from "styled-components";

type Props = {
  size?: number;
};

const DEFAULT_SIZE = 25;
const factor = 0.6;

const ImageInCapsuleStyled = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #f6866a;
  height: ${(props) => (props.size ? props.size : DEFAULT_SIZE)}rem;
  width: ${(props) =>
    props.size ? props.size * factor : DEFAULT_SIZE * factor}rem;
  border-radius: ${(props) =>
    props.size ? DEFAULT_SIZE * factor * 0.3 : 10}rem;
  overflow: hidden;

  & img {
    position: absolute;
    bottom: 0;
    height: 80%;
  }
`;

export default ImageInCapsuleStyled;
