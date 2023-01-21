import styles from "./EngineDetails.module.css";

const EngineDetails = () => {
  return (
    <div className={styles.engineDetailsContainer}>
      <ul>
        <li>
          <span className="paragraph-14-tw">Torque</span>
          <div className={styles.engineRadioTorque}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
        <li>
          <span className="paragraph-14-tw">Aceleração</span>
          <div className={styles.engineRadioAcceleration}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
        <li>
          <div>
            <span className="paragraph-14-tw">Velocidade max.</span>
            <p className={styles.mileage}>
              <strong>388</strong>
              <span>km/h</span>
            </p>
          </div>
          <div className={styles.radioSpeed}></div>
        </li>
      </ul>
    </div>
  );
};

export default EngineDetails;
