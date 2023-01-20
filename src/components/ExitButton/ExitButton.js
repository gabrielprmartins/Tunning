import styles from "./ExitButton.module.css";
import ReverseArrow from "../../assets/icons/reverse-arrow.svg";

const ExitButton = () => {
  return (
    <button className={styles.button}>
      <img src={ReverseArrow} alt="" />{" "}
      <p className="paragraph-16-o">[ESQ] Sair</p>
    </button>
  );
};

export default ExitButton;
