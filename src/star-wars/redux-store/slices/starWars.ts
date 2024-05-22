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
    setPeopleNext: (state, action: PayloadAction<string | undefined>) => {
      state.peopleNext = action.payload;
    },
    setPeoplePrev: (state, action: PayloadAction<string | undefined>) => {
      state.peoplePrev = action.payload;
    },
  },
});

export const starWarsReducer = starWarsSlice.reducer;

export const { setPeople, setStarShips, setPeopleNext, setPeoplePrev } =
  starWarsSlice.actions;

export const selectPeople = (state: RootState): Person[] =>
  state.starWars.people;

export const selectPeopleNext = (state: RootState): string | undefined =>
  state.starWars.peopleNext;

export const selectPeoplePrev = (state: RootState): string | undefined =>
  state.starWars.peoplePrev;

export const selectStarShips = (state: RootState): StarShip[] =>
  state.starWars.starShips;
