import styled from "styled-components";

export const StyledBar = styled.div`
  position: relative;
  max-width: 900px;
  height: 3px;
  background-color: gray;
  z-index: 0;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width};

  z-index: 5;
  height: 3px;
  background-color: white;
  transition: 0.4s ease-out;
`;
export const Point = styled.span`
  height: 10px;
  width: 3px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: ${({ left }) => left};
  transform: translateY(-50%);
  transition: 0.4 ease-out;
`;

export const Finish = styled.span`
  width: 12px;
  height: 12px;
  transition: 0.4 ease-out;
  background-color: white;
  position: absolute;
  left: ${({ left }) => left};
  top: 2px;
  transform: rotate(45deg) translateX(-10px);
`;

export const Title = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  transform: ${({ center }) => {
    return center ? "translate(-50%,50%)" : "translate(0, 50%)";
  }};
  font-size: 16px;
  color: #999;
  padding: 0;
  margin: 0;

  p {
    padding: 0;
    margin: 0;
    text-transform: capitalize;
  }
  p:first-child {
    color: ${({ color }) => (color === "color" ? "white" : "gray")};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
