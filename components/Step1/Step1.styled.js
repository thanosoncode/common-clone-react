import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
  flex-shrink: 0;

  transition: 0.6s ease;
  transform: ${({ step }) => {
    return step;
  }};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledHeader = styled.header`
  width: 65%;

  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/static/images/step1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 30px;
  height: 100vh;
  flex-shrink: 1 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    height: auto;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 900px;

  span {
    display: none;
    font-size: 28px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    flex-wrap: wrap;
  }

  li {
    margin-right: 20px;
    font-size: 17px;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 768px) {
    justify-content: space-between;

    span {
      display: block;
      font-size: 36px;
    }

    ul {
      display: none;
    }
  }
`;

export const StyledLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  div {
    position: relative;
    width: 35px;
    height: 35px;
  }

  img {
    display: block;
    width: 100%;
    object-position: center;
  }

  p {
    font-size: 26px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    p {
      display: none;
    }
    div {
      width: 40px;
      height: 40px;
    }
  }
`;

export const StyledTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  margin-top: 110px;
  padding: 20px 40px;
  max-width: 800px;

  h1 {
    font-size: 58px;
    margin-bottom: 40px;
    font-weight: 700;
    max-width: 650px;
  }

  p {
    margin-bottom: 40px;
    font-size: 20px;
    color: #ddd;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    width: 100%;
    text-align: center;
    padding: 0;

    h1 {
      font-size: 38px;
      margin-bottom: 20px;
      font-weight: 800;
    }
    p {
      font-size: 18px;
      text-align: center;
      width: 100%;
      font-weight: 600;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 60px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 20px 20px;
    header {
      padding-bottom: 10px;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    color: #a1a1a1;
    margin-bottom: 5px;
  }

  h5 {
    font-size: 17px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #444;
    font-size: 17px;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    p {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  border: 2px solid
    ${({ city, thisCity }) => (city === thisCity ? "#D34D35" : "#ccc")};

  cursor: pointer;
  background: white;
  font-weight: 500;

  &:hover {
    border: 2px solid ${({ theme }) => theme.color};
  }

  p {
    font-weight: ${({ city, thisCity }) => (city === thisCity ? "700" : "500")};
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Span = styled.span`
  border-radius: 999px;
  width: 30px;
  height: 28px;
  background: ${({ city, thisCity }) =>
    city === thisCity ? "#D34D35" : "#ccc"};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: 1px solid #999;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    font-size: 14px;
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.color};
  color: white;
  font-size: 17px;
  text-align: center;
  font-weight: 600;
  border: none;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colorDark};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }
`;
