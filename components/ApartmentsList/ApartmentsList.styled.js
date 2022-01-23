import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  filter: blur(${({ blur }) => blur});
  position: relative;
  transition: 1s ease;
`;

export const Header = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/static/images/aptlistheader.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
  overflow: hidden;

  h1 {
    font-size: 50px;
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 22px;
  }
`;

export const Section = styled.section`
  width: 100%;

  height: auto;
  overflow: hidden;
`;
export const Heading = styled.div`
  max-width: 1280px;
  margin: 50px auto 30px;
  color: #444;
  overflow: hidden;
  padding-left: 50px;

  h5 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 500;
  }

  p {
    font-size: 17px;
  }

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;
export const Grid = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  width: 100%;
  padding: 20px 70px;

  gap: 40px;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, 360px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  @media (max-width: 500px) {
    width: calc(100% -10px);
  }
`;
export const GridItem = styled.div`
  border: 1px solid rgb(235, 235, 235);
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  border-bottom: 1px solid rgb(235, 235, 235);

  h1 {
    font-size: 28px;
    font-weight: 700;
    text-transform: capitalize;
    color: #444;
  }

  p {
    font-weight: 800;
    font-size: 19px;
    color: #444;
  }

  small {
    text-transform: capitalize;
  }
`;

export const Text = styled.div`
  padding: 10px 25px 40px 25px;
  border-bottom: 1px solid rgb(235, 235, 235);
  color: #777;
  line-height: 26px;
`;

export const PreFooter = styled.div`
  padding: 10px 25px 30px 25px;
  border-bottom: 1px solid rgb(235, 235, 235);

  p {
    margin-bottom: 5px;
    color: #777;
  }

  small {
    font-size: 16px;

    font-weight: bold;
  }
  div {
    padding-top: 5px;
  }

  span {
    padding: 4px 8px;
    text-transform: capitalize;
    background-color: #eee;
    margin-right: 10px;
    font-weight: bold;
    color: #444;
  }
`;

export const Footer = styled.footer`
  background-color: #f7f7f7;
  padding: 25px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.color};
  color: white;
  font-size: 16px;
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

export const PrimaryButton = styled.button`
  display: block;
  width: 300px;

  margin: 30px auto;

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
