import "./App.css";
import { Navigation } from "./components/Navigation/index.jsx";

function App() {
  let navItems = ["About Me", "Portfolio", "Contact", "Resume"];
  let proName = "Abi Kumagai";

  return (
    <div className="App">
      <header className="App-header">
        <Navigation navItems={navItems} profileName={proName} />
      </header>
    </div>
  );
}

export default App;
