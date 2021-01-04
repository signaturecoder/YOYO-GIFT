import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux'; // it make the store available to every component in the app
import App from './App';
const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
