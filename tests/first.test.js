import React from 'react'
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Greeting from '../components/Greeting';
const common = require('../utilities/common');

test('renders components Greeting', () => {
  const { getByText } = render(<Greeting />)
  const linkElement = getByText(
    /Hi default name!/
  )
  expect(linkElement).toBeInTheDocument();
})

it('renders components Greeting to create snapshot', () => {
  const tree = renderer.create(<Greeting />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('unit test common.js', () => {
  common.printConsoleLog(common.TRACE, "title", { a: 1, b: "abc" });
  const cat = new common.Cat('HAHA');
  common.printConsoleLog(common.DEBUG, "CAT object", cat.makeSound());
  expect(common.sum(1, 2, 3)).toBe(6);
})
