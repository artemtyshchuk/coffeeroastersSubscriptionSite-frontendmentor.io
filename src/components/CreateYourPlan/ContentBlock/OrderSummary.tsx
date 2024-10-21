import styles from '../CreateYourPlan.module.scss'

interface OrderSummaryProps {
  preference: string
  beanType: string
  quantity: string
  grindOption: string
  delivery: string
}

export const OrderSummary = ({preference, beanType, quantity, grindOption, delivery}: OrderSummaryProps) => {
  return (
    <>
    <p className={styles.orderSummaryTitle}>Order Summary</p>
        <p className={styles.orderSummaryDescr}>
          “I drink my coffee as{" "}
          <span style={{ color: "#0E8784" }}>
            {preference ? preference : "_____"}
          </span>
          , with a{" "}
          <span style={{ color: "#0E8784" }}>
            {beanType ? beanType : "_____"}
          </span>{" "}
          type of bean.{" "}
          <span style={{ color: "#0E8784" }}>
            {quantity ? quantity : "_____"}
          </span>{" "}
          ground ala{" "}
          <span style={{ color: "#0E8784" }}>
            {grindOption ? grindOption : "_____"}
          </span>
          , sent to me{" "}
          <span style={{ color: "#0E8784" }}>
            {delivery ? delivery : "_____"}
          </span>
          .”
        </p>
    </>
  )
}