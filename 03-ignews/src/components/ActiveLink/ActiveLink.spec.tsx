import { render } from '@testing-library/react';
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
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a href="">Home</a>
      </ActiveLink>,
    );

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should receiving classname active if the link is the current link', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a href="">Home</a>
      </ActiveLink>,
    );

    expect(getByText('Home')).toHaveClass('active');
  });
});
