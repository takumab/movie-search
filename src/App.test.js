import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Film from './components/Film';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Film component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Film />, div)
})