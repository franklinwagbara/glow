import styled from "styled-components";

const TrendingProductsSectionStyled = styled.section`
  display: grid;
  grid-template: 1fr 1fr/ 1fr 1fr 1fr;
  gap: 1rem;
  margin: 5rem 0;

  & .trending-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default TrendingProductsSectionStyled;
