import styles from "./HomeLayout.module.scss";

import { HomeFirstBlock } from "./ContentBlocks/HomeFirstBlock";
import { HomeSecondBlock } from "./ContentBlocks/HomeSecondBlock";
import { HomeThirdBlock } from "./ContentBlocks/HomeThirdBlock";
import { HomeFourthBlock } from "./ContentBlocks/HomeFourthBlock";

export const HomeLayout = () => {
  return (
    <div className={styles.homeLayout}>
      <HomeFirstBlock />
      <HomeSecondBlock />
      <HomeThirdBlock />
      <HomeFourthBlock />
    </div>
  );
};
