import React from 'react';

const Pizza = (props) => {
  return React.createElement('div', null, [
    React.createElement('h1', { key: 'title' }, props.name),
    React.createElement('p', { key: 'desc' }, props.description),
  ]);
};

const App = () => {
  return React.createElement('div', null, [
    React.createElement('h1', { key: 'header' }, 'Pixel Perfect Pizzas'),
    React.createElement(Pizza, {
      key: 'p1',
      name: 'The Pepperoni Pizza',
      description: 'Mozzarella Cheese, Pepperoni',
    }),
    React.createElement(Pizza, {
      key: 'p2',
      name: 'The Hawaiian Pizza',
      description: 'Sliced Ham, Pineapple, Mozzarella Cheese',
    }),
    React.createElement(Pizza, {
      key: 'p3',
      name: 'The Big Meat Pizza',
      description: 'Bacon, Pepperoni, Italian Sausage, Chorizo Sausage',
    }),
  ]);
};

export default App;
