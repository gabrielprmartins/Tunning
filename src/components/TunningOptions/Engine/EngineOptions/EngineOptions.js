import styles from "./EngineOptions.module.css";

const options = [
  {
    name: "Turbo Compressor V8",
    price: "$ 310.000",
  },
  {
    name: "Centrífugo v10",
    price: "$ 40.000",
  },
  {
    name: "4 Cilindros Forjado",
    price: "$ 39.000",
  },
  {
    name: "V 12 MK",
    price: "$ 128.000",
  },
  {
    name: "V8 Forjado",
    price: "$ 56.000",
  },
  {
    name: "Bump V12",
    price: "$ 70.000",
  },
  {
    name: "Bump V10",
    price: "$ 50.000",
  },
  {
    name: "MK V12 Forjado",
    price: "$ 810.000",
  },
  {
    name: "V8 Turbo Triplo",
    price: "Equipado",
  },
];

const EngineOptions = () => {
  return (
    <ul className={styles.engineList}>
      {options.map(({ name, price }) => (
        <li key={name}>
          <p className="paragraph-14-tw">{name}</p>
          <p className={`paragraph-14-tw ${styles.price}`}>{price}</p>
        </li>
      ))}
    </ul>
  );
};

export default EngineOptions;
