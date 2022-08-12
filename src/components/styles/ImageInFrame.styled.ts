import styled from "styled-components";

const BOX_WIDTH = "17rem";

const ImageInFrameStyled = styled.div`
  width: ${BOX_WIDTH};
  height: 20rem;
  background-color: #b2a6d3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10rem;
  border-top-right-radius: 10rem;

  & img {
    width: 100%;
  }
`;

export default ImageInFrameStyled;
