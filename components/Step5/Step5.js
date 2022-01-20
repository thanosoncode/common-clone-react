import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { filterByPartner, filterByPets } from "../../features/Apartments";
import {
  Container,
  Section,
  Button1,
  Button2,
  PrimaryButton,
} from "./Step5.styled";

const Step5 = () => {
  const dispatch = useDispatch();
  const partnerStatus = [
    { partner: true, name: "with a partner" },
    { partner: true, name: "alone" },
  ];

  const petsStatus = [
    { pets: true, name: "yes" },
    { pets: true, name: "no" },
  ];

  const [selectedPartner, setSelectedPartner] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);

  const [showPetSection, setShowPetSection] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const step = useSelector((state) => state.steps.value);

  const apts = useSelector((state) => state.apartments.value);

  const saveToLocalStorage = () => {
    localStorage.setItem("apts", JSON.stringify(apts));
  };

  return (
    <Container step={`translateX(${-step}%)`}>
      <h1>Just a few more questions!</h1>
      <Section showPetSection={showPetSection} border={true}>
        <h4>Are you moving alone or with a partner?</h4>
        <div>
          {partnerStatus.map((item, index) => {
            return (
              <Button1
                key={index}
                onClick={() => {
                  dispatch(
                    filterByPartner({ partner: item.partner, name: item.name })
                  );
                  setSelectedPartner(item.name);
                  setShowPetSection(true);
                }}
                selectedPartner={selectedPartner}
                valuePartner={item.name}
              >
                {item.name}
              </Button1>
            );
          })}
        </div>
      </Section>
      <Section
        opacity={showPetSection ? "1" : "0"}
        visibility={showPetSection ? "visible" : "hidden"}
      >
        <h4>Do you have a pet?</h4>
        <div>
          {petsStatus.map((item, index) => {
            return (
              <Button2
                key={index}
                onClick={() => {
                  dispatch(filterByPets({ pets: item.pets, name: item.name }));
                  setSelectedPet(item.name);
                  setIsButtonEnabled(true);
                }}
                selectedPet={selectedPet}
                valuePet={item.name}
              >
                {item.name}
              </Button2>
            );
          })}
        </div>
      </Section>
      <Link href="apartments">
        <PrimaryButton
          disabled={!isButtonEnabled}
          opacity={isButtonEnabled ? "1" : "0.6"}
          onClick={saveToLocalStorage}
        >
          Continue to scheduling
        </PrimaryButton>
      </Link>
    </Container>
  );
};

export default Step5;
