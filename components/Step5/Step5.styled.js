import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/static/images/step5.jpg");
  padding: 70px;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  transform: ${({ step }) => {
    return step;
  }};

  h1 {
    font-size: 52px;
    border-bottom: 3px solid white;
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding: 25px;
    h1 {
      font-size: 20px;
    }
  }
`;

export const Section = styled.section`
  margin-top: 20px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ border }) => (border ? "#777" : "transparent")};
  padding-bottom: 40px;
  opacity: ${({ opacity }) => opacity};
  visibility: ${({ visibility }) => visibility};
  transition: 0.5s ease;

  h4 {
    font-size: 30px;
    font-weight: normal;
    color: ${({ showPetSection }) => (showPetSection ? "#777" : "white")};
    transition: 0.3s ease;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 400px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    margin-top: 10px;

    h4 {
      margin-bottom: 30px;
    }

    div {
      min-width: 100%;
    }
  }
`;

export const Button1 = styled.button`
  padding: 20px;
  background: ${({ selectedPartner, valuePartner }) => {
    if (selectedPartner === valuePartner) {
      return "white";
    } else {
      return "transparent";
    }
  }};
  color: ${({ selectedPartner, valuePartner }) => {
    if (selectedPartner === valuePartner) {
      return "black";
    } else {
      return "#ddd";
    }
  }};
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  border: none;
  transition: 0.3s ease;
  border: 2px solid white;
  flex: 1 0 auto;
  cursor: pointer;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button2 = styled.button`
  padding: 20px;
  background: ${({ selectedPet, valuePet }) => {
    if (selectedPet === valuePet) {
      return "white";
    } else {
      return "transparent";
    }
  }};
  color: ${({ selectedPet, valuePet }) => {
    if (selectedPet === valuePet) {
      return "black";
    } else {
      return "#ddd";
    }
  }};
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  border: none;
  transition: 0.3s ease;
  border: 2px solid white;
  flex: 1 0 auto;
  cursor: pointer;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const PrimaryButton = styled.button`
  padding: 20px;
  background: ${({ theme }) => theme.color};
  opacity: ${({ opacity }) => opacity};
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  border: none;
  transition: 0.3s ease;
  float: right;
  min-width: 240px;
  &:hover {
    background: ${({ theme }) => theme.colorDark};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    min-width: 100%;
    margin-top: 140px;
  }
`;
