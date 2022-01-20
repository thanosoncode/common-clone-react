import { createSlice } from "@reduxjs/toolkit";

export const stepsSlice = createSlice({
  name: "steps",
  initialState: { value: 0 },
  reducers: {
    goToNextStep: (state) => {
      state.value = state.value + 100;
    },
  },
});

export const { goToNextStep } = stepsSlice.actions;

export default stepsSlice.reducer;
