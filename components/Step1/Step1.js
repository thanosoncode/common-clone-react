import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { filterByCity } from "../../features/Apartments";
import { goToNextStep } from "../../features/Steps";
import { data } from "../../public/static/data";
import { MdMenu } from "react-icons/md";
import {
  StyledMain,
  StyledNav,
  StyledTitleDiv,
  StyledLogoDiv,
  StyledHeader,
  StyledSection,
  Buttons,
  PrimaryButton,
  Span,
  Button,
} from "./Step1.styled";

const Step1 = () => {
  const dispatch = useDispatch();
  const cities = Array.from(new Set(data.map((item) => item.fields.city)));
  const selectionList = useSelector((state) => state.apartments.selection);
  const [city, setCity] = useState("los angeles");

  const step = useSelector((state) => state.steps.value);

  return (
    <StyledMain step={`translateX(${-step}%)`}>
      <StyledHeader>
        {/* <Overlay /> */}
        <StyledNav>
          <StyledLogoDiv>
            <div>
              <Image src="/static/images/logo.png" alt="logo" layout="fill" />
            </div>
            <p>Common</p>
          </StyledLogoDiv>
          <span>
            <MdMenu />
          </span>
          <ul>
            <li>Homes</li>
            <li>Why Common</li>
            <li>Studio</li>
            <li>Management</li>
            <li>Services</li>
          </ul>
        </StyledNav>
        <StyledTitleDiv>
          <h1>Coliving and apartments for today&apos;s renter.</h1>
          <p>
            Find beautiful spaces with exceptional service, convenient
            amenities, and all-inclusive options.
          </p>
          <p>At Common, your rent gets you more.</p>
        </StyledTitleDiv>
      </StyledHeader>

      <StyledSection>
        <div>
          <header>
            <h5>City</h5>
            <h5>Homes</h5>
          </header>
          <Buttons>
            {cities.map((thisCity, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setCity(thisCity);
                  }}
                  city={city}
                  thisCity={thisCity}
                  index={index}
                >
                  <p>{thisCity}</p>
                  <Span city={city} thisCity={thisCity}>
                    {
                      data.filter((item) => item.fields.city === thisCity)
                        .length
                    }
                  </Span>
                </Button>
              );
            })}
          </Buttons>
        </div>

        <PrimaryButton
          onClick={() => {
            dispatch(filterByCity({ city }));
            setTimeout(() => dispatch(goToNextStep()), 400);
          }}
        >
          Find My Home
        </PrimaryButton>
      </StyledSection>
    </StyledMain>
  );
};

export default Step1;
