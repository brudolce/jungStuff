/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('renders without crashing', () => {

    shallow(
      <Card>
        test
      </Card>
    );
  });
});
