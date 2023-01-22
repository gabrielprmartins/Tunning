import ArrowLeft from "../../../../assets/icons/arrow-rounded-fill-opacity.svg";
import ArrowRight from "../../../../assets/icons/arrow-rounded-fill-white.svg";
import styles from "./DecalDetails.module.css";

const DecalDetails = () => {
  return (
    <div className={styles.decalContainer}>
      <div className={styles.decalColorsContainer}>
        <div className={styles.decalSelector}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.decalColors}>
          <span>Cor</span>
          <ul>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </ul>
        </div>
      </div>
      <div className={styles.wrapping}>
        <div className={styles.selectedWrapp}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <article>
          <span className="paragraph-14-tw">Envelopamento</span>
          <h4>RISC Thuday</h4>
          <strong>$ 500</strong>
        </article>
        <div className={styles.wrappingSlider}>
          <img src={ArrowLeft} />
          <p className="paragraph-14-tw">
            01<span>/08</span>
          </p>
          <img src={ArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default DecalDetails;
