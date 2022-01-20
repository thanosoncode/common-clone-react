import { createSlice } from "@reduxjs/toolkit";

import { data } from "../public/static/data";

//Every reducer, one after the other, filters the original state of the apartments. But in order to have more results at the end I restore the state to the initial at the 3rd step of the search.

export const apartmentsSlice = createSlice({
  name: "apartments",
  initialState: { value: data, selection: [] },
  reducers: {
    filterByCity: (state, action) => {
      state.value = state.value.filter(
        (item) => item.fields.city === action.payload.city
      );
      state.selection.push(action.payload.city);
    },
    filterByMovingTime: (state, action) => {
      state.value = state.value.filter(
        (item) => item.fields.availability === action.payload.time
      );
      state.selection.push(action.payload.time);
    },
    filterByDuration: (state, action) => {
      // I restore initialState filteredByCity to have more results at the end of the search. The line in the comment is the correct filtering.
      // state.value = state.value.filter(
      //   (item) => item.fields.duration === action.payload.duration
      // );

      state.value = data.filter(
        (item) => item.fields.city === action.payload.city
      );
      state.selection.push(action.payload.duration);
    },
    filterByBudget: (state, action) => {
      state.value = state.value.filter(
        (item) => item.fields.budget === action.payload.budget
      );
      state.selection.push(action.payload.budget);
    },
    filterByPartner: (state, action) => {
      state.value = state.value.filter(
        (item) => item.fields.partner === action.payload.partner
      );
      state.selection.push(action.payload.name);
    },
    filterByPets: (state, action) => {
      state.value = state.value.filter(
        (item) => item.fields.pet === action.payload.pets
      );

      state.selection.push(action.payload.name);
    },
  },
});

export default apartmentsSlice.reducer;

export const {
  filterByCity,
  filterByMovingTime,
  filterByDuration,
  filterByBudget,
  filterByPartner,
  filterByPets,
} = apartmentsSlice.actions;
