/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import SelectionSquare from './SelectionSquare';

describe('SelectionSquare', () => {
  it('renders without crashing', () => {
    shallow(
      <SelectionSquare>
        ok
      </SelectionSquare>
    );
  });
});
