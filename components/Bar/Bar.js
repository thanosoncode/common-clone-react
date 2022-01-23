import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyledBar, Title, Point, Finish, Progress } from "./Bar.styled";

const Bar = () => {
  const selections = useSelector((state) => state.apartments.selection);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (selections.length === 0) {
      setWidth(0);
    }
    if (selections.length === 1) {
      setWidth("28%");
    }
    if (selections.length === 2) {
      setWidth("50%");
    }
    if (selections.length === 3) {
      setWidth("72%");
    }
    if (selections.length === 4) {
      setWidth("100%");
    }
  }, [selections]);

  return (
    <StyledBar>
      <Progress width={width}></Progress>
      <Point left={"28%"}></Point>
      <Point left={"50%"}></Point>
      <Point left={"72%"}></Point>
      <Title left={"0"} color={selections.length === 0 ? "color" : undefined}>
        <p style={{ textAlign: "left" }}>Your city</p>
        <p>{selections[0]}</p>
      </Title>
      <Title
        left={"28%"}
        center={true}
        color={selections.length === 1 ? "color" : undefined}
      >
        <p>Move date</p>
        {/* <p>{selections[1]}</p> */}
        <p>
          {selections.length >= 2 ? (
            typeof selections[1] === "number" ? (
              selections[1] + " days"
            ) : (
              selections[1]
            )
          ) : (
            <>&nbsp;</>
          )}
        </p>
      </Title>
      <Title
        left={"50%"}
        center={true}
        color={selections.length === 2 ? "color" : undefined}
      >
        <p>Lease term</p>{" "}
        <p>
          {selections.length >= 3 ? selections[2] + " months" : <>&nbsp;</>}
        </p>
      </Title>
      <Title
        left={"72%"}
        center={true}
        color={selections.length === 3 ? "color" : undefined}
      >
        <p>Budget</p>
        <p>{selections.length >= 4 ? selections[3] : <>&nbsp;</>}</p>
      </Title>
      <Title
        right={"-10px"}
        color={selections.length === 4 ? "color" : undefined}
      >
        <p>Schedule tour</p> <p>&nbsp;</p>
      </Title>
      <Finish
        left={"100%"}
        color={selections.length >= 4 ? "color" : undefined}
      ></Finish>
    </StyledBar>
  );
};

export default Bar;
