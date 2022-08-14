import { IProduct } from "../interfaces";
import Heading from "./Heading";
import CardStyled from "./styles/Card.styled";
import Text from "./Text";

interface Props {
  item: IProduct;
}

const Card = ({ item }: Props): JSX.Element => {
  return (
    <CardStyled>
      <div className="image-container">
        <img src={item.image} alt="Product" />
      </div>
      <div className="product-info">
        <Heading size={5}>{item.name}</Heading>
        <Text size={0.8} block>
          {item.price}
        </Text>
      </div>
    </CardStyled>
  );
};
export default Card;
