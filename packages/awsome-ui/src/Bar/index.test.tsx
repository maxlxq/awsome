import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Bar from './index';

describe('<Bar />', () => {
  it('render Bar with dumi', () => {
    const msg = 'dumi';

    render(<Bar placeholder={msg} />);
    expect(screen.getByPlaceholderText(msg)).toBeInTheDocument();
  });
});
