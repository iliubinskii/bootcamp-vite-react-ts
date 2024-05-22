import { setPeople, setPeopleNext, setPeoplePrev } from "../slices";
import type { AppThunk } from "../types";

export const updatePeople: AppThunk<[string | undefined]> =
  (uri: string | undefined) => async (dispatch) => {
    const response = await fetch(uri ?? "https://swapi.dev/api/people");

    const json = await response.json();

    console.log(json);

    dispatch(setPeople(json.results));
    dispatch(setPeopleNext(json.next));
    dispatch(setPeoplePrev(json.previous));
  };
