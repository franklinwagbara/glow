import ImageInCapsuleStyled from "./styles/ImageInCapsule.styled";

type Props = {
  src: string;
  alt?: string;
  size?: number;
};

const ImageInCapsule = ({ src, alt, size }: Props): JSX.Element => {
  return (
    <ImageInCapsuleStyled size={size}>
      <img src={src} alt={alt ? alt : "Model"} />
    </ImageInCapsuleStyled>
  );
};

export default ImageInCapsule;
