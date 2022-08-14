import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .image-container {
    background-color: white;
    text-align: center;
    width: 100%;
    height: 15rem;
    padding: 2rem 0;
    margin-bottom: 1.5rem;

    & img {
      width: 10rem;
    }
  }

  & .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    & :last-child {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      color: gray;
    }
  }
`;

export default CardStyled;
