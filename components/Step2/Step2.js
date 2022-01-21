import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { filterByMovingTime } from "../../features/Apartments";
import { goToNextStep } from "../../features/Steps";
import {
  Container,
  Section,
  Header,
  Button,
  Buttons,
  HeaderMini,
  Table,
  Footer,
} from "./Step2.styled";
import Bar from "../Bar/Bar";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Step2 = () => {
  const dispatch = useDispatch();
  const movingTime = [
    { time: "asap", name: "As soon as possible" },
    { time: 30, name: "30 days" },
    { time: 60, name: "60 days" },
  ];

  const [selected, setSelected] = useState("As soon as possible");

  const step = useSelector((state) => state.steps.value);

  const selectionsList = useSelector((state) => state.apartments.selection);

  return (
    <Container step={`translateX(${-step}%)`}>
      <Header>
        <Bar />
        <HeaderMini>
          <p>Coliving and apartments in</p>
          <h1>{selectionsList[0]}</h1>
          <p>
            Common buildings <span>{selectionsList[0]}</span> offer a wide range
            of options, from coliving rooms to private studios, 1-and 2-bedroom
            apartments. No matter where you live, you’ll enjoy convenient
            amenities, free events, and exclusive perks.
          </p>
        </HeaderMini>

        <Table>
          <thead>
            <tr>
              <td style={{ paddingLeft: "15px" }}>Type</td>
              <td style={{ textAlign: "center" }}>All-inclusive</td>
              <td style={{ textAlign: "center" }}>Furnished</td>
              <td style={{ textAlign: "center" }}>Perks</td>
              <td style={{ textAlign: "center" }}>Pets allowed</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ paddingLeft: "15px" }}>Coliving</td>
              <td style={{ textAlign: "center", fontSize: "20px" }}>
                <BsFillCheckCircleFill />
              </td>
              <td style={{ textAlign: "center", fontSize: "20px" }}>
                <BsFillCheckCircleFill />
              </td>
              <td style={{ textAlign: "center", fontSize: "20px" }}>
                <BsFillCheckCircleFill />
              </td>
              <td style={{ textAlign: "center", fontSize: "20px" }}>
                <BsFillCheckCircleFill />
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "15px" }}>Studios, 1 &amp; 2 Beds</td>
              <td style={{ textAlign: "center", fontSize: "20px" }}>-</td>
              <td style={{ textAlign: "center", fontSize: "20px" }}>-</td>
              <td style={{ textAlign: "center", fontSize: "20px" }}>
                <BsFillCheckCircleFill />
              </td>
              <td style={{ textAlign: "center", fontSize: "20px" }}>
                <BsFillCheckCircleFill />
              </td>
            </tr>
            <tr>
              <td colSpan="5" style={{ paddingLeft: "15px" }}>
                All inclusive rent includes WiFi, utilities, weekly cleanings,
                and more.
              </td>
            </tr>
          </tbody>
        </Table>

        <Footer>
          <section>
            <div>
              <Image src="/static/images/person1.png" layout="fill" />
            </div>
            <div>
              Common is the best option if you're new to{" "}
              <small>{selectionsList[0]}</small>.Service is professional and
              quick if you have any requests.
              <span></span>
            </div>
          </section>
        </Footer>
      </Header>
      <Section>
        <h1>When are you planning on moving?</h1>
        <Buttons>
          {movingTime.map((item, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  dispatch(filterByMovingTime({ time: item.time }));
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

export default Step2;
