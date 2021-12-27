import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';
import Posts, { getStaticProps } from '../../pages/posts';
import { getPrismicClient } from '../../services/prismic';

const posts = [
  {
    slug: 'my-new-post',
    title: 'My new Post',
    excerpt: 'Post excerpt',
    updatedAt: 'December, 24',
  },
];

jest.mock('../../services/prismic');

describe('Posts page', () => {
  it('should render correctly', async () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText('My new Post')).toBeInTheDocument();
  });

  it('should load init data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
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
                  text: 'Post excerpt',
                },
              ],
            },
            last_publication_date: '2021-12-12',
          },
        ],
      }),
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: 'my-new-post',
              title: 'My new Post',
              excerpt: 'Post excerpt',
              updatedAt: '11 de dezembro de 2021',
            },
          ],
        },
      }),
    );
  });
});
