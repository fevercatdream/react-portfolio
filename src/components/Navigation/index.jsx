import React, { useState } from "react";
import "./style.css";

function Navigation({ navItems, selectedItem, onSelectItem }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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
              {navItems.map((item) => (
                <li
                  className={
                    selectedItem === item ? "nav-item active" : "nav-item"
                  }
                  key={item}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onSelectItem(item);
                  }}
                >
                  <a
                    className="nav-link"
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
