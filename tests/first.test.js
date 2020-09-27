import React from 'react'
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Greeting from '../components/Greeting';

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
