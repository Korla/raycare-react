import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

test('renders 2 links', () => {
  // Arrange
  const header = shallow(<Header />);
  const links = header.find('NavLink');

  // Act and assert
  expect(links.length).toEqual(2);
});