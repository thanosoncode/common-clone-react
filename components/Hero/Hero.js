import React from "react";

import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import Step5 from "../Step5/Step5";
import Step6 from "../Step6";
import { Container } from "./Hero.styled.js";

const Hero = () => {
  return (
    <>
      <Container>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
      </Container>
    </>
  );
};

export default Hero;
