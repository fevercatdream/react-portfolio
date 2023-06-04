import React, { useState } from "react";
import "./style.css";

function Navigation({ navItems, profileName, onSelectItem }) {
  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1>
            <a className="navbar-brand" href="#">
              {profileName}
            </a>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {navItems.map((item, index) => (
                <li
                  className={
                    selectedIndex === index ? "nav-item active" : "nav-item"
                  }
                  key={item}
                  onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item);
                  }}
                >
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={item}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navigation };
