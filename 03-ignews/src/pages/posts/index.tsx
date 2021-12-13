import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>13 de dezembro de 2021</time>

            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              reprehenderit, eos cum mollitia optio consequatur architecto aut
              veniam aperiam fugiat neque voluptatibus eveniet distinctio
              placeat repudiandae odit necessitatibus inventore libero!
            </p>
          </a>

          <a href="#">
            <time>13 de dezembro de 2021</time>

            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              reprehenderit, eos cum mollitia optio consequatur architecto aut
              veniam aperiam fugiat neque voluptatibus eveniet distinctio
              placeat repudiandae odit necessitatibus inventore libero!
            </p>
          </a>

          <a href="#">
            <time>13 de dezembro de 2021</time>

            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              reprehenderit, eos cum mollitia optio consequatur architecto aut
              veniam aperiam fugiat neque voluptatibus eveniet distinctio
              placeat repudiandae odit necessitatibus inventore libero!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'publication')],
    {
      fetch: ['title', 'content'],
      pageSize: 100,
    },
  );

  console.log(response);

  return {
    props: {},
  };
};
