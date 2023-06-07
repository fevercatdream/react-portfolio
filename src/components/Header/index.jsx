import React, { useState } from "react";
import "./style.css";
import { Navigation } from "../Navigation";

let profileName = "Abi Kumagai";

function Header({ navItems, onSelectItem, selectedItem }){
    return (
        <header className="App-header">
            <h1>
                <a id="nav-id" className="navbar-brand" onClick={() => onSelectItem("About Me")}>
                    {profileName}
                </a>
            </h1>
            <Navigation 
                navItems={navItems}
                onSelectItem={onSelectItem}
                selectedItem={selectedItem}
            />
        </header>
    );
}

export { Header };
