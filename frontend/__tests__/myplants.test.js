import React from 'react';
import renderer from 'react-test-renderer';
import MyPlants from '../src/app/(tabs)';

test('renders correctly', () => {
    const tree = renderer.create(<MyPlants />).toJSON();
    expect(tree).toMatchSnapshot();
});