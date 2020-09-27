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
  common.printConsoleLog(cat.makeSound(), "CAT object", common.ERROR);
  expect(common.sum(1, 2, 3)).toBe(6);
})

it('fetching data external api', async () => {
  const axios = require('axios');
  try {
    await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
      (response) => {
        common.printConsoleLog(response.data, "RESPONSE", common.WARN);
      }
    );
  } catch (error) {
    console.error(error);
  }
})

it('unit test array', () => {
  common.setKeyAndValueInObject('name', "set name here");
  common.setKeyAndValueInObject('new_key1', "set new value1 here");
  common.accessSomeThingInObject();
  common.accessItemInArray();
  expect(common.sum(1, 2, 3)).toBe(6);
})
