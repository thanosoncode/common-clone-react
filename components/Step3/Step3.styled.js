import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-shrink: 0;
  transition: 0.4s ease;
  transform: ${({ step }) => {
    return step;
  }};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Header = styled.header`
  width: 65%;

  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/static/images/step3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 40px 70px;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px 0;
  }
`;

export const HeaderMini = styled.div`
  margin-top: 100px;
  max-width: 500px;
  p {
    margin-bottom: 10px;
    color: gray;
    line-height: 24px;
    font-size: 17px;
  }

  h1 {
    font-size: 44px;
    font-weight: 800;
    color: white;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  p:last-child {
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    max-width: 100%;
    margin: 70px 0 0 0;

    h1 {
      font-size: 24px;
    }

    p {
      color: #ddd;
    }
    p:last-child {
      max-width: 370px;
    }
  }
`;

export const Section = styled.section`
  width: 35%;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-size: 44px;
    color: #2a2a2a;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 0 20px;
    margin: 0 auto;

    h1 {
      font-size: 26px;
      margin: 20px 0;
    }

    p {
      display: none;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: #444;
    font-size: 17px;
  }

  button:last-child {
    border-bottom: 2px solid #ababab;
  }

  button:hover {
    border: 2px solid ${({ theme }) => theme.color};
    /* border-bottom: 1px solid ${({ theme }) => theme.color}; */
  }

  button:last-child:hover {
    border-bottom: 2px solid ${({ theme }) => theme.color};
  }

  @media (max-width: 768px) {
    button {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  cursor: pointer;
  background: white;
  font-weight: ${({ selected, name }) => (selected === name ? "800" : "600")};

  border: 2px solid
    ${({ selected, name }) => (selected === name ? "#D34D35" : "#ababab")};
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
