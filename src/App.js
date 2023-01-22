import { useState } from "react";

import BalanceView from "./components/BalanceView/BalanceView";
import ExitButton from "./components/ExitButton/ExitButton";
import TunningList from "./components/TunningList/TunningList";
import TunningSpecifications from "./components/TunningOptions/TunningSpecifications/TunningSpecifications";
import Advertising from "./components/Advertising/Advertising";
import "./styles/global.css";

const App = () => {
  // Sends the name of the option selected in the TunningList for
  // TunningSpecifications to display
  const [tunningOptionName, setTunningOptionName] = useState("");

  return (
    <div className="App">
      <ExitButton />
      <TunningList
        tunningOptionName={tunningOptionName}
        setTunningOptionName={setTunningOptionName}
      />
      <BalanceView />
      <div className="optionOverview">
        <TunningSpecifications tunningOptionName={tunningOptionName} />
        <Advertising />
      </div>
    </div>
  );
};

export default App;
