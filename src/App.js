import BalanceView from "./components/BalanceView/BalanceView";
import ExitButton from "./components/ExitButton/ExitButton";
import TunningList from "./components/TunningList/TunningList";
import DecalDetails from "./components/TunningOptions/Decals/DecalDetails/DecalDetails";
import EngineDetails from "./components/TunningOptions/Engine/EngineDetails/EngineDetails";
import EngineSpecifications from "./components/TunningOptions/Engine/EngineSpecifications/EngineSpecifications";

import "./styles/global.css";

const App = () => {
  return (
    <div className="App">
      <ExitButton />
      <TunningList />
      <BalanceView />
    </div>
  );
};

export default App;
