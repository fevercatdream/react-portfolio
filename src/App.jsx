import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/index.jsx";
import { ContactForm } from "./pages/Contact";

function App() {
  let navItems = ["About Me", "Portfolio", "Contact", "Resume"];
  let proName = "Abi Kumagai";

  const [selectedItem, setSelectedItem] = useState("Contact");

  const handleSelectItem = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  function renderPage() {
    switch (selectedItem) {
      case "Contact":
        return <ContactForm />;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navigation
          navItems={navItems}
          profileName={proName}
          onSelectItem={handleSelectItem}
          selectedItem={selectedItem}
        />
      </header>
      {renderPage()}
    </div>
  );
}

export default App;
