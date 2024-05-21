import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState, StarShip } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RootState["starWars"] = { starShips: [] };

const starWarsSlice = createSlice({
  initialState,
  name: "starWars",
  reducers: {
    setStarShips: (state, action: PayloadAction<readonly StarShip[]>) => {
      state.starShips = [...action.payload];
    },
  },
});

export const starWarsReducer = starWarsSlice.reducer;

export const { setStarShips } = starWarsSlice.actions;

export const selectStarShips = (state: RootState): readonly StarShip[] =>
  state.starWars.starShips;
