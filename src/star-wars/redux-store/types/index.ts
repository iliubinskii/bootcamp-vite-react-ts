import type { useDispatch, useSelector } from "react-redux";
import type { store } from "../store";

export type AppDispatch = typeof store.dispatch;

export interface AppThunk<T = void> {
  (): (dispatch: AppDispatch) => Promise<T>;
}

export interface RootState {
  readonly starWars: {
    readonly people: readonly Person[];
    readonly starShips: readonly StarShip[];
  };
}

export interface Person {
  readonly name: string;
  readonly birthYear: string;
}

export interface StarShip {
  readonly name: string;
  readonly model: string;
}

export type UseAppDispatch = typeof useDispatch<AppDispatch>;

export type UseAppSelector = typeof useSelector<RootState>;
