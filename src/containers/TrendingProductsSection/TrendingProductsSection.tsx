import { IProduct } from "../../interfaces";
import product1 from "../../assets/images/product1.png";
import { Button, Card, Heading, Text } from "../../components";
import TrendingProductsSectionStyled from "./TrendingProductsSection.styled";

const products: IProduct[] = [
  {
    name: "Shower Butter",
    price: "$190.99",
    image: product1,
  },
];

const TrendingProductsSection = (): JSX.Element => {
  return (
    <TrendingProductsSectionStyled>
      <div className="trending-info">
        <Heading size={3}>
          Trending On{" "}
          <Heading size={3} color="#f3693c">
            Essentials
          </Heading>
        </Heading>

        <Text color="gray" size={0.8}>
          Made with natures best ingredients - Our products' transparent
          ingredient. Fear of God Essentials.
        </Text>

        <Button type="outlined" color="#f3693c">
          Browse All Products
        </Button>
      </div>

      <Card item={products[0]} />
      <Card item={products[0]} />
      <Card item={products[0]} />
      <Card item={products[0]} />
      <Card item={products[0]} />
    </TrendingProductsSectionStyled>
  );
};

export default TrendingProductsSection;
