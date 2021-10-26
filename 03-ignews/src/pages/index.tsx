import type { NextPage } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

const Home: NextPage = () => {
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
            for <span>$9.90</span> month
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export default Home;
