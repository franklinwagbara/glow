import styled from "styled-components";

const SpecialProductSectionStyled = styled.section`
  position: relative;
  margin-top: -10px;
  height: 30rem;
  width: 100%;
  display: flex;
  align-items: center;

  & .product-image {
    position: absolute;
    margin: 12rem;
    z-index: 10;
  }

  & .product-info {
    position: absolute;
    box-sizing: border-box;
    right: 0;
    width: 60%;
    height: 100%;
    background-color: #f1e4ef;
    padding: 8rem 8rem;

    & .video {
      position: absolute;
      top: -3rem;
      right: 3rem;
      width: 10rem;
      height: 5rem;
      overflow: hidden;
      border: 3px solid white;

      & img {
        width: 100%;
      }
    }

    & .caption {
      margin-bottom: 2rem;
    }

    & .details {
      display: flex;
      flex-direction: row;
      gap: 2rem;

      & .question {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
    }
  }
`;
export default SpecialProductSectionStyled;
