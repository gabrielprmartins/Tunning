import styles from "./DecalOptions.module.css";

import Texture from "../../../../assets/images/texture.svg";
import ArrowLeft from "../../../../assets/icons/arrow-rounded-fill-opacity.svg";
import ArrowRight from "../../../../assets/icons/arrow-rounded-fill-white.svg";
import DecalDetails from "../DecalDetails/DecalDetails";

const DecalOptions = () => {
  return (
    <div className={styles.decalContainer}>
      <div className={styles.decalContent}>
        <div className={styles.decalTextureContainer}>
          <div className={styles.decalTextureInner}></div>
        </div>
        <img src={Texture} loading="lazy" />
        <div className={styles.decalOptions}>
          <div className={styles.decalSlider}>
            <img src={ArrowLeft} />
            <p className="paragraph-14-tw">
              01<span>/08</span>
            </p>
            <img src={ArrowRight} />
          </div>
          <p className={`paragraph-14-tw ${styles.decalPrice}`}>$ 500</p>
        </div>
      </div>
      <div className={styles.decalDetails}>
        <DecalDetails />
      </div>
    </div>
  );
};

export default DecalOptions;
