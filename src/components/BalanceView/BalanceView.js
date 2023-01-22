import styles from "./BalanceView.module.css";

import ChangeArrowIcon from "../../assets/icons/change-arrows.svg";

const BalanceView = () => {
  return (
    <div className={styles.balanceContainer}>
      <div className={styles.balanceGrid}>
        <div className={styles.balance}>
          <span>Saldo</span>
          <p className={`paragraph-20-o ${styles.currentBalance}`}>$ 3.000</p>
          <p className={`paragraph-20-o ${styles.changeBalance}`}>$ 190.000</p>
        </div>
        <div className={styles.arrowsIcon}>
          <img src={ChangeArrowIcon} />
        </div>
      </div>
    </div>
  );
};

export default BalanceView;
