import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { filterByDuration } from "../../features/Apartments";
import { goToNextStep } from "../../features/Steps";
import {
  Container,
  Section,
  Header,
  Button,
  Buttons,
  HeaderMini,
} from "./Step3.styled";
import { Footer } from "../Step2/Step2.styled";
import Bar from "../Bar/Bar";

const Step3 = () => {
  const dispatch = useDispatch();
  const leaseLength = [
    { duration: 3, name: "3-5 Months" },
    { duration: 6, name: "6 months" },
    { duration: 12, name: "12 Months +" },
  ];
  const selectionList = useSelector((state) => state.apartments.selection);
  const city = selectionList[0];

  const [selected, setSelected] = useState("3-5 Months");
  const step = useSelector((state) => state.steps.value);

  return (
    <Container step={`translateX(${-step}%)`}>
      <Header>
        <Bar />
        <HeaderMini style={{ paddingBottom: "50px" }}>
          <p>We’re ready to help you find your next home.</p>
          <h1>We make your apartment search in NYC faster than ever</h1>
          <p>
            Whether you’re renting an all-inclusive coliving suite or a private
            apartment, you’ll experience the ease of keyless entry, a friendly
            property services team, and Common’s Connect by app to comfortably
            settle into your new home.
          </p>
        </HeaderMini>
        <Footer>
          <section>
            <div>
              <Image src="/static/images/person2.png" layout="fill" />
            </div>
            <div>
              The application and interview process was quick and efficient and
              I was able to move in within a few weeks
              <span></span>
            </div>
          </section>
        </Footer>
      </Header>
      <Section>
        <div>
          <h1>What lease length are you looking for?</h1>
          <p>
            No long-term plans, no problem. Common offers short term leases and
            security deposit replacement options, so you can move with low
            commitment and low cost.
          </p>
        </div>

        <Buttons>
          {leaseLength.map((item, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  dispatch(filterByDuration({ duration: item.duration, city }));
                  setTimeout(() => dispatch(goToNextStep()), 1000);
                  setSelected(item.name);
                }}
                selected={selected}
                name={item.name}
              >
                {item.name}
              </Button>
            );
          })}
        </Buttons>
      </Section>
    </Container>
  );
};

export default Step3;
