import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByPets } from "../features/Apartments";
import { goToNextStep } from "../features/Steps";

const Step5 = () => {
  const dispatch = useDispatch();
  const petsStatus = [
    { pets: true, name: "yes" },
    { pets: false, name: "no" },
  ];
  const selectionList = useSelector((state) => state.apartments.selection);

  return (
    <>
      <div>
        {selectionList.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </div>
      <section>
        {petsStatus.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                dispatch(filterByPets({ pets: item.pets, name: item.name }));
                dispatch(goToNextStep());
              }}
            >
              {item.name}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Step5;
