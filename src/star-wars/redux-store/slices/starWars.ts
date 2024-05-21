import type { PayloadAction } from "@reduxjs/toolkit";
import type { Person, RootState, StarShip } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RootState["starWars"] = {
  people: [],
  starShips: [],
};

const starWarsSlice = createSlice({
  initialState,
  name: "starWars",
  reducers: {
    setPeople: (state, action: PayloadAction<Person[]>) => {
      state.people = action.payload;
    },
    setStarShips: (state, action: PayloadAction<StarShip[]>) => {
      state.starShips = action.payload;
    },
  },
});

export const starWarsReducer = starWarsSlice.reducer;

export const { setPeople, setStarShips } = starWarsSlice.actions;

export const selectPeople = (state: RootState): readonly Person[] =>
  state.starWars.people;

export const selectStarShips = (state: RootState): readonly StarShip[] =>
  state.starWars.starShips;
