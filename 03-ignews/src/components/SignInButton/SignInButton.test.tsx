import { render, screen } from '@testing-library/react';
import { SignInButton } from '.';

describe('SignInButton', () => {
  it("should be render the message: 'Sign in with Github' when the property 'isUserLoggedIn' equals false", () => {
    render(<SignInButton />);

    const button = screen.getByRole('button', { name: /sign in with github/i });

    expect(button).toBeInTheDocument();
  });

  it("should be render the user name logged when the prop 'isUserLoggedIn' equals true", () => {
    render(<SignInButton />);

    screen.logTestingPlaygroundURL();

    const userNameLogged = screen.getByRole('button', { name: /davi silva/i });

    expect(userNameLogged).toBeInTheDocument();
  });
});
