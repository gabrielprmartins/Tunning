import { useState } from "react";

import EngineOptions from "../../components/TunningOptions/Engine/EngineOptions/EngineOptions";
import DecalOptions from "../TunningOptions/Decals/DecalOptions/DecalOptions";
import styles from "./TunningList.module.css";

import Banner from "../../assets/images/banner.svg";
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

const TunningList = () => {
  const [active, setActive] = useState(false);
  const [optionName, setOptionName] = useState("");

  function handleActiveOptions(event) {
    let option = event.currentTarget.id;
    if (optionName === option) {
      setOptionName("");
      setActive(!active);
    } else setOptionName(option);
  }

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
              className={optionName === name ? "active" : ""}
            >
              <img src={img} />
              <p className="paragraph-16-tw">{name}</p>
            </li>

            {optionName === name ? component : ""}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TunningList;
