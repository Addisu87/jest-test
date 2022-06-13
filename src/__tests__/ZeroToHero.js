import { expect } from 'expect';
import pizzas from './data';

// very basic test to notify the user if our pizza data has changed
test('The pizza data is correct', () => {
  expect(pizzas).toMatchSnapshot();
  expect(pizzas).toHaveLength(4);
  expect(pizzas.map((pizza) => pizza.name)).toEqual([
    'Chicago Pizza',
    'Neapolitan Pizza',
    'New York Pizza',
    'Sicilian Pizza'
  ]);
});

// let's test that each item in the pizza data has the correct properties

