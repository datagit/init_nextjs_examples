import React from 'react'
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Index from '../../pages/index';

test('renders pages.index.js', () => {
  const { getByText } = render(<Index />)
  const linkElement = getByText(
    /footer/
  )
  expect(linkElement).toBeInTheDocument();
})

it('renders pages.index.js to create snapshot', () => {
  const tree = renderer.create(<Index />).toJSON()
  expect(tree).toMatchSnapshot()
})
