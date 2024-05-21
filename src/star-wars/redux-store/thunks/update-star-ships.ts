import { setStarShips } from "../slices";
import type { AppThunk } from "../types";

export const updateStarShips: AppThunk = () => async (dispatch) => {
  const response = await fetch("https://swapi.dev/api/starships");

  const json = await response.json();

  console.log(json);

  // TODO
  dispatch(
    setStarShips([
      { name: "Millennium Falcon", model: "YT-1300 light freighter" },
    ])
  );
};
