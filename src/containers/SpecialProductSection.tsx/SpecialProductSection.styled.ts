import styled from "styled-components";

const SpecialProductSectionStyled = styled.section`
  position: relative;
  margin-top: -10px;
  height: 35rem;
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
    width: 45rem;
    height: 100%;
    background-color: #f1e4ef;
    padding: 8rem 6rem;
    padding-left: 10rem;
    margin-right: -5rem;

    & .video {
      position: absolute;
      top: -3rem;
      right: 8rem;
      width: 10rem;
      height: 5rem;
      overflow: hidden;
      border: 3px solid white;

      & img {
        width: 100%;
      }
    }

    & .caption {
      margin-bottom: 3rem;
    }

    & .details {
      display: flex;
      flex-direction: row;
      gap: 3rem;

      & .question {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
export default SpecialProductSectionStyled;
