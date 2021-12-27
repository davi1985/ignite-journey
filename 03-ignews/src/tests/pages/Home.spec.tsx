import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';
import Home, { getStaticProps } from '../../pages';
import { stripe } from '../../services/stripe';

jest.mock('next/router');
jest.mock('../../services/stripe');
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false],
  };
});

describe('Home page', () => {
  it('should render correctly', async () => {
    render(<Home product={{ priceId: 'fake-price-id', amount: '$10.00' }} />);

    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  it('should load init data', async () => {
    const retriveStripePricesMocked = mocked(stripe.prices.retrieve);

    retriveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00',
          },
        },
      }),
    );
  });
});
