import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { starWarsReducer } from "./slices";

const REDUX_PERSIST_KEY = "star-wars-redux-persist";

const rootReducer = combineReducers({
  starWars: starWarsReducer,
});

const persistedReducer = persistReducer(
  {
    key: REDUX_PERSIST_KEY,
    storage,
    whitelist: ["starWars"],
  },
  rootReducer
);

export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: false,
    });

    return defaultMiddleware.concat(thunk);
  },
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
