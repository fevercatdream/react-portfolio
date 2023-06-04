import "./App.css";
import { Navigation } from "./components/Navigation/index.jsx";

function App() {
  let navItems = ["About Me", "Portfolio", "Contact", "Resume"];
  let proName = "Abi Kumagai";

  const handleSelectItem = (item) => {
    console.log(item);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navigation
          navItems={navItems}
          profileName={proName}
          onSelectItem={handleSelectItem}
        />
      </header>
    </div>
  );
}

export default App;
