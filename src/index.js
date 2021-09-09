import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from "./shared/globalStyles/globalStyles";
import {Provider} from "react-redux";
import {store} from "./store";
import {GameField} from "./components/molecules/gameField";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <GameField />
    </Provider>
  )
}

ReactDOM.render(<App />,  document.getElementById('root'));