import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from "./shared/globalStyles/globalStyles";
import {Provider} from "react-redux";
import {store} from "./store";
import {Page} from "./pages/page";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Page />
    </Provider>
  )
}

ReactDOM.render(<App />,  document.getElementById('root'));