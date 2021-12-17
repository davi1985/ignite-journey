import { render, screen } from '@testing-library/react';
import { ActiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return { asPath: '/' };
    },
  };
});

describe('ActiveLink component', () => {
  it('should rendered correctly', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a href="">Home</a>
      </ActiveLink>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should receiving classname active if the link is the current link', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a href="">Home</a>
      </ActiveLink>,
    );

    expect(screen.getByText('Home')).toHaveClass('active');
  });
});
