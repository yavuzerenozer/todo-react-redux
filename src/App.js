import React from "react";
import "./App.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Input from "./components/input";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Input />
    </Provider>
  );
}

export default App;
