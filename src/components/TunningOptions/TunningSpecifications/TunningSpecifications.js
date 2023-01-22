import styles from "./TunningSpecifications.module.css";

const TunningSpecifications = ({ tunningOptionName }) => {
  // Change the name according to the selected tuning option

  if (tunningOptionName === "") return "";
  return (
    <div className={styles.specificationsContainer}>
      <h1>{tunningOptionName}</h1>
      <p className={`paragraph-14-tw ${styles.specificationsParagraph}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, iusto
        minima. Accusantium fugiat, at culpa minus nulla reiciendis facilis
        commodi non laudantium aut obcaecati cum. Delectus quas assumenda dicta
        aliquid!
      </p>
    </div>
  );
};

export default TunningSpecifications;
