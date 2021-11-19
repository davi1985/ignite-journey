import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

import { SubscribeButton } from '.';

const handleSubscribeMock = jest.fn();

describe('SubscribeButton Component', () => {
  it('should be render correctly', () => {
    render(<SubscribeButton />);

    const button = screen.getByRole('button', { name: /subscribe now/i });

    expect(button).toBeInTheDocument();
  });

  it('should possible to call an function when button is clicled', async () => {
    render(<SubscribeButton />);

    const button = screen.getByRole('button', { name: /subscribe now/i });

    useEvent.click(button, handleSubscribeMock());

    expect(handleSubscribeMock).toBeCalled();
  });
});
