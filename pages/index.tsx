import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import OpportunityPage from "./opportunities";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <OpportunityPage></OpportunityPage>
    </div>
  );
};

export default Home;
