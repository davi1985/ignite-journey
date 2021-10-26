import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../service/stripe";
import { priceFormatter } from "../utils/utils";

import styles from "./home.module.scss";

type HomeProps = {
  product: {
    priceId: string;
    amount: number;
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
            for <span>{priceFormatter(product.amount)}</span> month
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1JoogRLqbXf0anamhvmHErQM", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };

  return {
    props: {
      product,
    },
  };
};
