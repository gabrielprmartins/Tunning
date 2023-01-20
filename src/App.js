import ExitButton from "./components/ExitButton/ExitButton";
import TunningOptions from "./components/TunningOptions/TunningOptions";

import "./styles/global.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="grid-1">
          <ExitButton />
          <TunningOptions />
        </div>
      </div>
    </div>
  );
};

export default App;
