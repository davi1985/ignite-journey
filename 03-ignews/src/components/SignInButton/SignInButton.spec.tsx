import { render, screen } from '@testing-library/react';
import { SignInButton } from '.';
import { mocked } from 'jest-mock';
import { useSession } from 'next-auth/client';

jest.mock('next-auth/client');

describe('SignInButton', () => {
  it('should rendered correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);

    expect(screen.getByText('Sign In with Github')).toBeInTheDocument();
  });

  it('should rendered correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: 'Jonh Doe', email: 'john.doe@example.com' },
        expires: 'fake-expires',
      },
      false,
    ]);

    render(<SignInButton />);

    expect(screen.getByText('Jonh Doe')).toBeInTheDocument();
  });
});
