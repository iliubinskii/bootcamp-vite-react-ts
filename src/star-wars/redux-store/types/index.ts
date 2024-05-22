import type { TypedUseSelectorHook, useDispatch } from "react-redux";
import type { store } from "../store";

export type AppDispatch = typeof store.dispatch;

export interface AppThunk<A extends unknown[] = [], T = void> {
  (...args: A): (dispatch: AppDispatch) => Promise<T>;
}

export interface RootState {
  starWars: {
    people: Person[];
    starShips: StarShip[];
    peopleNext?: string | undefined;
    peoplePrev?: string | undefined;
  };
}

export interface Person {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface StarShip {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: unknown[];
  starship_class: string;
  url: string;
}

export type UseAppDispatch = typeof useDispatch<AppDispatch>;

export type UseAppSelector = TypedUseSelectorHook<RootState>;
