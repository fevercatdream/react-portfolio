import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/index.jsx";
import { AboutMe } from "./pages/AboutMe";
import { Portfolio } from "./pages/Portfolio";
import { ContactForm } from "./pages/Contact";
import { Resume } from "./pages/Resume";
import { Footer } from "./components/Footer";

function App() {
  let navItems = ["About Me", "Portfolio", "Contact", "Resume"];
  let proName = "Abi Kumagai";

  const [selectedItem, setSelectedItem] = useState("About Me");

  const handleSelectItem = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  function renderPage() {
    switch (selectedItem) {
      case "About Me":
        return <AboutMe sectionTitle={"About Me"} />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        <></>;
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
      <Footer />
    </div>
  );
}

export default App;
