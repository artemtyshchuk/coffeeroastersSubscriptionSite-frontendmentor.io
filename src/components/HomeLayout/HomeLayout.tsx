import styles from "./HomeLayout.module.scss";

import { HomeFirstBlock } from "./ContentBlocks/HomeFirstBlock";
import { HomeSecondBlock } from "./ContentBlocks/HomeSecondBlock";
import { HomeThirdBlock } from "./ContentBlocks/HomeThirdBlock";
import { HomeFourthBlock } from "./ContentBlocks/HomeFourthBlock";

interface HomeLayoutProps {}

export const HomeLayout = ({}: HomeLayoutProps) => {
  return (
    <div className={styles.homeLayout}>
      <HomeFirstBlock />
      <HomeSecondBlock />
      <HomeThirdBlock />
      <HomeFourthBlock />
    </div>
  );
};
