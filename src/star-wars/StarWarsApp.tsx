import "./StarWarsApp.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux-store";
import { PersistGate } from "redux-persist/integration/react";
import MainPage from "./MainPage";

function StarWarsApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainPage />
      </PersistGate>
    </Provider>
  );
}

export default StarWarsApp;
