import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '../src/app/(tabs)';

test('renders correctly', () => {
    const tree = renderer.create(<Settings />).toJSON();
    expect(tree).toMatchSnapshot();
});