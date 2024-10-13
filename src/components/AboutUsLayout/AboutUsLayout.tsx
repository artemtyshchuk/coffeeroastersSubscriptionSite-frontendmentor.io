import styles from "./AboutUsLayout.module.scss";
import { AboutUsFirstBlock } from "./ContentBlocks/AboutUsFirstBlock";
import { AboutUsSecondBlock } from "./ContentBlocks/AboutUsSecondBlock";
import { AboutUsFourthBlock } from "./ContentBlocks/AboutUsFourthBlock";
import { AboutUsThirdBlock } from "./ContentBlocks/AboutUsThirdBlock";

export const AboutUsLayout = () => {
  return (
    <div className={styles.aboutUsLayout}>
      <AboutUsFirstBlock />
      <AboutUsSecondBlock />
      <AboutUsThirdBlock />
      <AboutUsFourthBlock />
    </div>
  );
};
