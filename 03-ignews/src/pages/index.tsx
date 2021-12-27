import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import { priceFormatter } from '../utils/utils';
import Image from 'next/image';

import styles from './home.module.scss';

type HomeProps = {
  product: {
    priceId: string;
    amount: string;
  };
};

const Home: NextPage<HomeProps> = ({ product }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home - ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>

          <h1>
            News about the <span>React</span> world.
          </h1>

          <p>
            Get access to all publications <br />
            for <span>{product.amount}</span> month
          </p>

          <SubscribeButton />
        </section>

        <Image
          src="/images/avatar.svg"
          alt="Girl coding"
          width={400}
          height={500}
        />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JoogRLqbXf0anamhvmHErQM', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: priceFormatter((price.unit_amount as number) / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
