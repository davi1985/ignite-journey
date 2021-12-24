import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import Post, { getServerSideProps } from '../../pages/posts/[slug]';
import { stripe } from '../../services/stripe';
import { getPrismicClient } from '../../services/prismic';
import { getSession } from 'next-auth/client';

const post: {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
} = {
  slug: 'my-new-post',
  title: 'My new Post',
  content: '<p>Post content</p>',
  updatedAt: 'December, 24',
};

jest.mock('next-auth/client');
jest.mock('../../services/prismic');

describe('Post page', () => {
  it('should render correctly', async () => {
    render(<Post post={post} />);

    expect(screen.getByText('My new Post')).toBeInTheDocument();
    expect(screen.getByText('Post content')).toBeInTheDocument();
  });

  it('should redirect user if no subscription is found', async () => {
    const getSessionMocked = mocked(getSession);

    getSessionMocked.mockResolvedValueOnce(null);

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post',
      },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/',
        }),
      }),
    );
  });

  it('shoul load initial data', async () => {
    const getSessionMocked = mocked(getSession);
    const getPrismicClientMocked = mocked(getPrismicClient);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription',
    } as any);

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        uid: 'my-new-post',
        data: {
          title: [
            {
              type: 'heading',
              text: 'My new Post',
            },
          ],
          content: [
            {
              type: 'paragraph',
              text: 'Post content',
            },
          ],
        },
        last_publication_date: '12-12-2021',
      }),
    } as any);

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post',
      },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new Post',
            content: '<p>Post content</p>',
            updatedAt: '12 de dezembro de 2021',
          },
        },
      }),
    );
  });
});
