import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
    url("/static/images/step2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 40px 70px;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
`;

export const Section = styled.section`
  width: 35%;
  max-width: 500px;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-size: 40px;
    color: #2a2a2a;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 0 20px;
    margin: 0 auto;

    h1 {
      font-size: 22px;
      margin: 30px 0;
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

export const HeaderMini = styled.div`
  margin-top: 100px;
  max-width: 500px;
  p {
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

  span {
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    p:last-child {
      display: none;
    }
    h1 {
      font-size: 36px;
    }
    padding: 0 20px;
    margin-top: 70px;
  }
`;

export const Table = styled.table`
  color: white;
  border-collapse: collapse;
  margin-bottom: 10px;
  width: 100%;
  max-width: 900px;

  th {
    text-align: left;
    color: #ccc;
    font-size: 15px;
  }

  td,
  th {
    padding: 14px;
  }

  th td {
    padding: 14px;
  }

  tbody tr:nth-child(1),
  tbody tr:nth-child(2) {
    background: rgba(255, 255, 255, 0.2);
    font-weight: 600;
    font-size: 17px;
  }

  tr:nth-child(2) {
    border-bottom: 1px solid #aaa;
  }

  tbody tr:last-child {
    background-color: #ccc;
    color: #444;
    font-size: 17px;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 14px;
    color: #ccc;

    td,
    th {
      padding: 5px;
      font-size: 14px;
    }

    th td {
      padding: 5px;
    }
  }
`;

export const Footer = styled.footer`
  padding: 20px 0;
  border-top: 1px solid gray;
  max-width: 900px;
  section {
    display: flex;
  }

  div:first-child {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #eee;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  div:last-child {
    color: white;
    background: rgba(255, 255, 255, 0.2);

    margin-left: 20px;
    border: 1px solid white;
    position: relative;
    z-index: 0;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
  }

  div:last-child span {
    position: absolute;
    width: 14px;
    height: 14px;
    background: #555;
    /* background: red; */
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%) rotate(45deg);
    z-index: 1;
  }

  small {
    text-transform: capitalize;
    font-size: 17px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
