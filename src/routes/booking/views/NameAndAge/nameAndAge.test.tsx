import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { NameAndAge } from './nameAndAge';

test('nameAndAge renders the name and age', () => {
  // Arrange
  const { name, age, jsx } = setup();
  const renderedNameAndAge = shallow(jsx);

  // Act
  const nameAndAgeText = renderedNameAndAge.find('span').text();

  // Act and assert
  expect(nameAndAgeText).toEqual(`Name: ${name}, Age: ${age}`);
});

test('nameAndAge snapshot test', () => {
  // Arrange
  const { jsx } = setup();

  // Act
  const tree = renderer.create(jsx).toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
});

function setup() {
  const name = 'A name';
  const age = 5;
  const addAge = () => undefined;

  const jsx = <NameAndAge name={name} age={age} addAge={addAge} />;

  return { name, age, addAge, jsx };
}