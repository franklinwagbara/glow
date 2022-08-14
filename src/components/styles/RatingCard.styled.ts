import styled from "styled-components";

type Props = {
  direction: string;
};

const DEFAULT_SIZE = 5.5;
const ROTATION_ANGLE = 30;

const RatingCardStyled = styled.div<Props>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${DEFAULT_SIZE}rem;
  height: ${DEFAULT_SIZE * 1.7}rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 60%
  );
  padding: 1rem;
  transform: rotate(${ROTATION_ANGLE}deg);
  border-radius: ${DEFAULT_SIZE * 1}rem;

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;
    width: 40%;
    transform: rotate(-${ROTATION_ANGLE}deg);
    line-height: 1rem;
  }
`;

export default RatingCardStyled;
