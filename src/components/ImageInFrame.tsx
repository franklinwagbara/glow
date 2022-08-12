import ImageInFrameStyled from "./styles/ImageInFrame.styled";

type Props = {
  src: string;
};

const ImageInFrame = ({ src }: Props): JSX.Element => {
  return (
    <ImageInFrameStyled>
      <img src={src} alt="product" />
    </ImageInFrameStyled>
  );
};
export default ImageInFrame;
