import BalanceView from "./components/BalanceView/BalanceView";
import ExitButton from "./components/ExitButton/ExitButton";
import TunningList from "./components/TunningList/TunningList";
import TunningSpecifications from "./components/TunningOptions/TunningSpecifications/TunningSpecifications";
import Advertising from "./components/Advertising/Advertising";
import "./styles/global.css";

const App = () => {
  return (
    <div className="App">
      <ExitButton />
      <TunningList />
      <BalanceView />
      <div className="optionOverview">
        <TunningSpecifications />
        <Advertising />
      </div>
    </div>
  );
};

export default App;
