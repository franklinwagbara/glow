import { Heading, ImageInCapsule, Text } from "../../components";
import RatingCard from "../../components/RatingCard";
import RatingsSectionStyled from "./RatingsSection.styled";
import modelImage from "../../assets/images/model1.png";

const RatingsSection = (): JSX.Element => {
  return (
    <RatingsSectionStyled>
      <div className="rating-info">
        <div className="image">
          <ImageInCapsule src={modelImage} />
        </div>

        <div className="description">
          <Heading size={3} block>
            We make going all natural{" "}
            <Heading size={3} color="#f3693c">
              Beauty
            </Heading>
          </Heading>

          <Text size={0.8} color="gray">
            Made with natures best ingredients - our products transparent
            ingredients lists allow you to know
          </Text>
        </div>

        <div className="cards">
          <RatingCard title="Product Users" rating="7M+" />
          <RatingCard title="Brand Product" rating="99+" direction="down" />
          <RatingCard title="Product Reviews" rating="5M" />
        </div>
      </div>
    </RatingsSectionStyled>
  );
};
export default RatingsSection;
