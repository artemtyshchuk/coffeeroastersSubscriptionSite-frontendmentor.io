import styles from "./HomeLayout.module.scss";
import granEspresso from "assets/home/desktop/image-gran-espresso.png";
import planalto from "assets/home/desktop/image-planalto.png";
import piccollo from "assets/home/desktop/image-piccollo.png";
import danche from "assets/home/desktop/image-danche.png";
import bean from "assets/home/desktop/icon-coffee-bean.svg";
import gift from "assets/home/desktop/icon-gift.svg";
import truck from "assets/home/desktop/icon-truck.svg";
import { CreateYourPlanButton } from "components/Buttons/CreateYourPlanButton/CreateYourPlanButton";

interface HomeLayoutProps {}

export const HomeLayout = ({}: HomeLayoutProps) => {
  return (
    <div className={styles.homeLayout}>
      {/* first container */}
      <div className={styles.firstContainer}>
        <h2 className={styles.firstBlockTitle}>Great coffee made simple.</h2>
        <p className={styles.firstBlockDescr}>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <CreateYourPlanButton />
      </div>

      {/* second container */}
      <div className={styles.secondContainer}>
        <div className={styles.secondBlockTitleContainer}>
          <p className={styles.secondBlockTitle}>our collection</p>
        </div>
        <div className={styles.coffeCollectionContainer}>
          <div className={styles.coffeBlock}>
            <div className={styles.coffeImgContainer}>
              <img src={granEspresso} alt="granEspresso" />
            </div>
            <p className={styles.coffeTitle}>Gran Espresso</p>
            <p className={styles.coffeDescr}>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience.
            </p>
          </div>

          <div className={styles.coffeBlock}>
            <div className={styles.coffeImgContainer}>
              <img src={planalto} alt="planalto" />
            </div>
            <p className={styles.coffeTitle}>Planalto</p>
            <p className={styles.coffeDescr}>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts.
            </p>
          </div>

          <div className={styles.coffeBlock}>
            <div className={styles.coffeImgContainer}>
              <img src={piccollo} alt="piccollo" />
            </div>
            <p className={styles.coffeTitle}>Piccollo</p>
            <p className={styles.coffeDescr}>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry.
            </p>
          </div>

          <div className={styles.coffeBlock}>
            <div className={styles.coffeImgContainer}>
              <img src={danche} alt="granEspresso" />
            </div>
            <p className={styles.coffeTitle}>Danche</p>
            <p className={styles.coffeDescr}>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes.
            </p>
          </div>
        </div>
      </div>

      {/* third container */}
      <div className={styles.thirdContainer}>
        <div className={styles.thirdBlockTitleContainer}>
          <p className={styles.thirdBlockTitle}>Why choose us?</p>
          <p className={styles.thirdBlockDescr}>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>

        <div className={styles.whyUsBlocksContainer}>
          <div className={styles.whyUsBlock}>
            <img src={bean} alt="bean" />
            <p className={styles.whyUsBlockTitle}>Best quality</p>
            <p className={styles.whyUsBlockDescr}>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>

          <div className={styles.whyUsBlock}>
            <img src={gift} alt="gift" />
            <p className={styles.whyUsBlockTitle}>Exclusive benefits</p>
            <p className={styles.whyUsBlockDescr}>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>

          <div className={styles.whyUsBlock}>
            <img src={truck} alt="truck" />
            <p className={styles.whyUsBlockTitle}>Free shipping</p>
            <p className={styles.whyUsBlockDescr}>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </div>
      {/* fourth container */}
      <div className={styles.fourthContainer}>
        <p className={styles.fourthBlockTitle}>How it works</p>
        <div className={styles.lineContainer}>
          <span className={styles.oval}></span>
          <span className={styles.line}></span>
          <span className={styles.oval}></span>
          <span className={styles.line}></span>
          <span className={styles.oval}></span>
        </div>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <p className={styles.stepNumber}>01</p>
            <p className={styles.stepTitle}>
              Pick your <br />
              coffee
            </p>
            <p className={styles.stepDescr}>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>

          <div className={styles.step}>
            <p className={styles.stepNumber}>02</p>
            <p className={styles.stepTitle}>Choose the frequency</p>
            <p className={styles.stepDescr}>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>

          <div className={styles.step}>
            <p className={styles.stepNumber}>03</p>
            <p className={styles.stepTitle}>Receive and enjoy!</p>
            <p className={styles.stepDescr}>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <CreateYourPlanButton />
      </div>
    </div>
  );
};
