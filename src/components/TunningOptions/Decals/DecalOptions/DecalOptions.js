import styles from "./DecalOptions.module.css";

import Texture from "../../../../assets/images/texture.svg";
import ArrowLeft from "../../../../assets/icons/arrow-rounded-fill-opacity.svg";
import ArrowRight from "../../../../assets/icons/arrow-rounded-fill-white.svg";

const DecalOptions = () => {
  return (
    <div className={styles.decalContainer}>
      <img src={Texture} />
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
  );
};

export default DecalOptions;
