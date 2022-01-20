import React, { useEffect, useState } from "react";
import Image from "next/image";
import { data } from "../../public/static/data";
import {
  Wrapper,
  Header,
  Section,
  Heading,
  Grid,
  GridItem,
  ImageWrapper,
  Flex,
  PreFooter,
  Footer,
  Text,
  Button,
} from "./ApartmentsList.styled";

const ApartmentsList = () => {
  const [apartments, setApartments] = useState(data);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("apts");

      setApartments(JSON.parse(storage));
    }
  }, []);

  const [blur, setBlur] = useState("12px");

  useEffect(() => {
    setTimeout(() => {
      setBlur(0);
    }, 500);
  }, []);

  return (
    <Wrapper blur={blur}>
      <Header>
        <h1>Thank you.</h1>
        <p>We're excited to help you find your new home!</p>
      </Header>
      <Section>
        <Heading>
          <h5>Here&apos;s what&apos;s available in your city.</h5>
          <p>Learn more about our homes and book a tour today:</p>
        </Heading>
        <Grid>
          {apartments.map((apt, index) => {
            return (
              <GridItem key={index}>
                <ImageWrapper>
                  <Image src={apt.image.src} layout="fill" alt="" />
                </ImageWrapper>

                <Flex>
                  <h1>{apt.fields.name}</h1>
                  <div>
                    <p>${apt.fields.budget}</p>
                    <small>{apt.fields.duration} months</small>
                  </div>
                </Flex>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Odio, dignissimos beatae earum consequuntur incidunt inventore
                  aperiam vel amet laboriosam, voluptates tenetur quia rem
                  illum.
                </Text>
                <PreFooter>
                  <p>
                    Units available (earliest available{" "}
                    <small>{apt.fields.availability}</small>)
                  </p>
                  <div>
                    {apt.fields.units.map((item, i) => {
                      return <span key={i}>{item}</span>;
                    })}
                  </div>
                </PreFooter>
                <Footer>
                  <Button>Book a tour</Button>
                </Footer>
              </GridItem>
            );
          })}
        </Grid>
      </Section>
    </Wrapper>
  );
};

export default ApartmentsList;
