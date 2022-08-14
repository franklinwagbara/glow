import styled from "styled-components";

const RatingsSectionStyled = styled.section`
  height: 35rem;
  width: 100%;

  & .rating-info {
    position: relative;
    box-sizing: border-box;
    width: 45rem;
    height: 100%;
    background-color: #ffe5de;
    padding: 5rem;
    padding-right: 13.5rem;
    padding-left: 5rem;
    margin-left: -5rem;

    & .image {
      position: absolute;
      right: -17%;
      top: 14%;
    }

    & .description {
      margin-bottom: 3rem;

      & > :first-child {
        line-height: 3.5rem;
        margin-bottom: 1rem;
      }

      & > :last-child {
        line-height: 1.4rem;
      }
    }

    & .cards {
      display: flex;
      gap: 1rem;
    }
  }
`;

export default RatingsSectionStyled;
