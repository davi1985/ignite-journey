import { render, screen, fireEvent } from '@testing-library/react';
import { SubscribeButton } from '.';
import { mocked } from 'jest-mock';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

jest.mock('next-auth/client');

jest.mock('next/router');

describe('SubscribeButton', () => {
  it('should rendered correctly ', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SubscribeButton />);

    expect(screen.getByText('Subscribe now')).toBeInTheDocument();
  });

  it('should redirect to sing in when not authenticated', async () => {
    const siginMocked = mocked(signIn);
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Subscribe now');

    await fireEvent.click(subscribeButton);

    expect(siginMocked).toHaveBeenCalled();
  });

  it('should redirect to posts when user already to have an subscription ', async () => {
    const useRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);
    const pushMock = jest.fn();

    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: 'John Doe',
          email: 'john.doe@example.com',
        },
        activeSubscription: 'fake-active-subscription',
        expires: 'fake-expires',
      },
      false,
    ]);

    useRouterMocked.mockReturnValue({
      push: pushMock,
    } as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Subscribe now');

    await fireEvent.click(subscribeButton);

    expect(pushMock).toHaveBeenCalledWith('/posts');
  });
});
