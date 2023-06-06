import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AboutMe } from "./pages/AboutMe";
import { Portfolio } from "./pages/Portfolio";
import { ContactForm } from "./pages/Contact";
import { Resume } from "./pages/Resume";
import { Footer } from "./components/Footer";

function App() {
  let navItems = ["About Me", "Portfolio", "Contact", "Resume"];

  const [selectedItem, setSelectedItem] = useState("About Me");

  const onSelectItem = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  function renderPage() {
    switch (selectedItem) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      case "About Me":
      default:
        return <AboutMe sectionTitle={"About Me"} />;
    }
  }

  return (
    <div className="App">
      <Header
          navItems={navItems}
          onSelectItem={onSelectItem}
          selectedItem={selectedItem}
        />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
