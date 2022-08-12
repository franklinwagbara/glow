import styled from "styled-components";

const BannerSectionStyled = styled.section`
  position: relative;
  height: 550px;
  display: flex;
  align-items: center;
  line-height: 5rem;

  & img {
    position: absolute;
    right: 0rem;
    width: 800px;
    margin-right: -8rem;
  }

  & .banner-info {
    z-index: 20;
  }

  & .description {
    margin: 2rem 0;
  }
`;

export default BannerSectionStyled;
