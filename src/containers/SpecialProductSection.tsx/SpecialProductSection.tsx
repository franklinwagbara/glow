import { Heading, ImageInFrame, Text } from "../../components";
import SpecialProductSectionStyled from "./SpecialProductSection.styled";
import productImage from "../../assets/images/model1.png";

const SpecialProductSection = (): JSX.Element => {
  return (
    <SpecialProductSectionStyled>
      <div className="product-image">
        <ImageInFrame src={productImage} />
      </div>
      <div className="product-info">
        <div className="video">
          <img src={productImage} alt="mock video" />
        </div>
        <div className="caption">
          <Heading size={4}>
            The self care brand thats setting a new
            <Heading size={4} color="#f3693c">
              {" "}
              standard Clean
            </Heading>{" "}
            products
          </Heading>
        </div>

        <div className="details">
          <div className="question">
            <Heading size={5}>Where are products made</Heading>
            <Text size={0.7} color="gray">
              Many brands especially in period care carry products that take
              centuries
            </Text>
          </div>

          <div className="question">
            <Heading size={5}>Where are products made</Heading>
            <Text size={0.7} color="gray">
              Many brands especially in period care carry products that take
              centuries
            </Text>
          </div>
        </div>
      </div>
    </SpecialProductSectionStyled>
  );
};

export default SpecialProductSection;
