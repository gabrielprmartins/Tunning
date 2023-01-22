import { useState } from "react";

import CardAd from "../../assets/images/card-ad.svg";
import styles from "./Advertising.module.css";

const Advertising = () => {
  const [active, setActive] = useState(true);

  // Enables and disables advertisement according to state
  function handleActiveAd() {
    setActive(!active);
  }

  return (
    <div className={styles.advertisingContainer}>
      {!active ? (
        <button className={styles.openButton} onClick={handleActiveAd}>
          Anúncio da Nink Custons
        </button>
      ) : (
        ""
      )}
      {active ? (
        <>
          <button className={styles.closeButton} onClick={handleActiveAd}>
            Fechar anúncio
          </button>
          <article>
            <h5>Novo veículo na loja</h5>
            <img src={CardAd} loading="lazy" />
            <span className={styles.advertisingOverviewButton}>
              Clique para ver mais
            </span>
          </article>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Advertising;
