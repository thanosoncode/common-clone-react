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
  margin-top: 120px;
  h1 {
    font-size: 44px;
    font-weight: 800;
    color: white;
    text-transform: capitalize;
    margin-bottom: 40px;
    max-width: 600px;
  }

  section {
    display: flex;
  }

  p {
    flex: 1;
    margin-left: 50px;
    color: #ddd;
    line-height: 26px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    max-width: 100%;
    margin: 70px 0 0 0;

    h1 {
      font-size: 24px;
      margin-bottom: 25px;
    }

    p {
      margin: 20px 0 0 0;
      max-width: 350px;
    }
    section {
      flex-direction: column;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  z-index: 1;

  img {
    object-fit: cover;
    object-position: center;
    aspect-ratio: 16 / 9;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    top: 10px;
    left: 10px;
    position: absolute;
    background-color: gray;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 160px;
  }

  @media (max-width: 500px) {
    width: calc(100% - 10px);
    height: 160px;
  }
`;

export const Section = styled.section`
  width: 35%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  div {
    padding: 30px 60px;
  }

  h1 {
    font-size: 44px;
    color: #2a2a2a;
    margin-bottom: 20px;
  }

  p {
    font-size: 17px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 0;
    margin: 0 auto;
    text-align: center;

    div {
      padding: 10px;
    }
    h1 {
      font-size: 26px;
      margin: 0;
    }
    p {
      line-height: 20px;
    }
  }
`;

export const Footer = styled.footer`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 60px 40px 60px;

  h1 {
    font-weight: normal;
    font-size: 20px;
    color: #444;
    letter-spacing: 1px;
  }

  input {
    width: 100%;
    background-color: #999;
    -webkit-appearance: none;
    height: 10px;
    border-radius: 5px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;

    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid ${({ theme }) => theme.color};
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    margin-top: -8px;
    box-shadow: 2px 2px 5px ${({ theme }) => theme.color};
  }

  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 1px ${({ theme }) => theme.color},
      0px 0px 1px ${({ theme }) => theme.color};
    border: 1px solid ${({ theme }) => theme.color};
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  input[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 1px ${({ theme }) => theme.color},
      0px 0px 1px ${({ theme }) => theme.color};
    border: 1px solid ${({ theme }) => theme.color};
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;

    background: #ccc;
    border-radius: 5px;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #ccc;
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;

    background: #ccc;
    border-radius: 1.3px;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #ccc;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #ccc;
  }
  input[type="range"]::-ms-fill-upper {
    background: #ccc;

    border-radius: 2.6px;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #ccc;
  }

  button {
    margin-top: 50px;
    width: 100%;
    padding: 20px;
    background: ${({ theme }) => theme.color};
    color: white;
    font-size: 17px;
    text-align: center;
    font-weight: 600;
    border: none;
    transition: 0.3s ease;

    @media (max-width: 768px) {
      padding: 20px;
      font-size: 16px;
    }
  }

  button:hover {
    background: ${({ theme }) => theme.colorDark};
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
