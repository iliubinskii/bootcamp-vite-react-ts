import { setPeople } from "../slices";
import type { AppThunk } from "../types";

export const updatePeople: AppThunk = () => async (dispatch) => {
  const response = await fetch("https://swapi.dev/api/people");

  const json = await response.json();

  dispatch(setPeople(json.results));
};
