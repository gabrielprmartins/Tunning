import { useState } from "react";

import EngineOptions from "../../components/TunningOptions/Engine/EngineOptions/EngineOptions";
import DecalOptions from "../TunningOptions/Decals/DecalOptions/DecalOptions";
import styles from "./TunningList.module.css";

import Banner from "../../assets/images/Banner.svg";
import EngineIcon from "../../assets/icons/engine.svg";
import TransmissionIcon from "../../assets/icons/transmission.svg";
import FixIcon from "../../assets/icons/fix.svg";
import ColorBucketIcon from "../../assets/icons/color-bucket.svg";
import VehicleIcon from "../../assets/icons/vehicle.svg";
import StickerIcon from "../../assets/icons/sticker.svg";

const options = [
  {
    name: "Motor",
    img: EngineIcon,
    component: <EngineOptions />,
  },
  {
    name: "Transmissão",
    img: TransmissionIcon,
    component: "",
  },
  {
    name: "Reparar",
    img: FixIcon,
    component: "",
  },
  {
    name: "Pintura",
    img: ColorBucketIcon,
    component: "",
  },
  {
    name: "Lataria",
    img: VehicleIcon,
    component: "",
  },
  {
    name: "Decalques",
    img: StickerIcon,
    component: <DecalOptions />,
  },
];

const TunningList = ({ tunningOptionName, setTunningOptionName }) => {
  const [active, setActive] = useState(false);

  // Activates and sends the option name to the App component,
  // so that it is shown in TunningSpecifications
  function handleActiveOptions(event) {
    let option = event.currentTarget.id;
    if (tunningOptionName === option) {
      setTunningOptionName("");
      setActive(!active);
    } else setTunningOptionName(option);
  }

  // Maps the options and show the component according with name
  return (
    <div className={styles.tunningContainer}>
      <img src={Banner} />
      <ul className={styles.tunningList}>
        {options.map(({ name, img, component }) => (
          <div key={name}>
            <li
              key={name}
              onClick={handleActiveOptions}
              id={name}
              className={tunningOptionName === name ? "active" : ""}
            >
              <img src={img} />
              <p className="paragraph-16-tw">{name}</p>
            </li>
            {tunningOptionName === name ? component : ""}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TunningList;
