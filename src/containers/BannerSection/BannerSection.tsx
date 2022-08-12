import model1 from "../../assets/images/model1.png";
import { Avatar, Button, Heading, Text } from "../../components";
import BannerSectionStyled from "./BannerSection.styled";

const BannerSection = (): JSX.Element => {
  return (
    <BannerSectionStyled>
      <div className="banner-info">
        <Heading size={2} block>
          Let your skin
        </Heading>
        <Heading size={2} block>
          Going
          <span>
            <Avatar />
          </span>
          Out
        </Heading>

        <div className="description">
          <Text color="gray" size={0.8} block>
            We want to bring to the world through our <br />
            products that very special feeling joy healthy and <br />
            positive energy
          </Text>
        </div>

        <Button type="contained" color="#f3693c">
          Shop Now
        </Button>
        <Button type="none" color="black">
          How to use
        </Button>
      </div>
      <img src={model1} alt="A model" />
    </BannerSectionStyled>
  );
};

export default BannerSection;
