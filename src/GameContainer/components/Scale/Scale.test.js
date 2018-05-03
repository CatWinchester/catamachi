import React from 'react';
import Scale from './Scale';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Scale type="hunger" amount={3}></Scale>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
