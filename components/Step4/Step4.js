import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { filterByBudget } from "../../features/Apartments";
import { goToNextStep } from "../../features/Steps";
import {
  Container,
  Section,
  Header,
  Footer,
  HeaderMini,
  ImageWrapper,
} from "./Step4.styled";
import Bar from "../Bar/Bar";

const Step4 = () => {
  const dispatch = useDispatch();
  const [budget, setBudget] = useState(1200);

  const step = useSelector((state) => state.steps.value);

  return (
    <Container step={`translateX(${-step}%)`}>
      <Header>
        <Bar />
        <HeaderMini>
          <h1>Get more from your rent in New York.</h1>
          <section>
            <ImageWrapper>
              <Image src="/static/images/step4b.jpg" layout="fill" alt="" />
            </ImageWrapper>
            <p>
              When you rent with Common, you get more than an apartment. You’ll
              find great amenities, a thriving community, and exclusive perks,
              all for an attainable price.
            </p>
          </section>
        </HeaderMini>
      </Header>
      <Section>
        <div>
          <h1>What is your budget?</h1>
          <p>
            Live comfortably with access to awesome amenities, starting at just
            $1,200/month.
          </p>
        </div>
        <Footer>
          <h1>${budget}</h1>
          <input
            type="range"
            min="1200"
            max="1800"
            step="200"
            onChange={(e) => setBudget(parseInt(e.target.value))}
          />
          <button
            onClick={() => {
              dispatch(filterByBudget({ budget }));
              setTimeout(() => dispatch(goToNextStep()), 400);
            }}
          >
            Continue
          </button>
        </Footer>
      </Section>
    </Container>
  );
};

export default Step4;
