import Heading from "./Heading";
import RatingCardStyled from "./styles/RatingCard.styled";
import Text from "./Text";

type Props = {
  title: string;
  rating: string;
  direction?: "up" | "down";
};

const RatingCard = ({
  title,
  rating,
  direction = "up",
}: Props): JSX.Element => {
  return (
    <RatingCardStyled direction={direction}>
      <div className="content">
        <Heading size={6}>{title}</Heading>
        <Text size={2} color="#f3693c">
          {rating}
        </Text>
      </div>
    </RatingCardStyled>
  );
};

export default RatingCard;
