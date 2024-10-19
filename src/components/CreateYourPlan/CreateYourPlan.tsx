import { CreatePlanFirstBlock } from "./ContentBlock/CreatePlanFirstBlock";
import { CreatePlanSecondBlock } from "./ContentBlock/CreatePlanSecondBlock";
import { CreatePlanThirdBlock } from "./ContentBlock/CreatePlanThirdBlock";
import styles from "./CreateYourPlan.module.scss";

interface CreateYourPlanProps {}

export const CreateYourPlan = ({}: CreateYourPlanProps) => {
  return (
    <div className={styles.createYourPlan}>
      <CreatePlanFirstBlock />
      <CreatePlanSecondBlock />
      <CreatePlanThirdBlock />
    </div>
  );
};
