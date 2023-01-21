import styles from "./ExitButton.module.css";
import ReverseArrowIcon from "../../assets/icons/reverse-arrow.svg";

const ExitButton = () => {
  return (
    <button className={styles.button}>
      <img src={ReverseArrowIcon} />
      <p className="paragraph-16-o">
        <strong>[ESQ]</strong> Sair
      </p>
    </button>
  );
};

export default ExitButton;
