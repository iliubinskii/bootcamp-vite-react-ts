import { setStarShips } from "../slices";
import type { AppThunk } from "../types";

export const updateStarShips: AppThunk = () => async (dispatch) => {
  // TODO: Fetch star ships from the API
  dispatch(setStarShips([{ name: "Millennium Falcon" }]));
};
