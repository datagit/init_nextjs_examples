import React from 'react'
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FilterableProductTable from '../../components/FilterableProductTable';

test('renders components FilterableProductTable', () => {
  const { getByText } = render(<FilterableProductTable />)
  const linkElement = getByText(
    /Only show products in stock/
  )
  expect(linkElement).toBeInTheDocument();
})

it('renders components FilterableProductTable to create snapshot', () => {
  const tree = renderer.create(<FilterableProductTable />).toJSON()
  expect(tree).toMatchSnapshot()
})
