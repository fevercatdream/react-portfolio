import React, { useState } from "react";
import "./style.css";

function Project ({title, desc, imageUrl}){    
    return(
            <a class="card" href="" target="_blank" rel="noopener" style={{ backgroundImage: `url(${imageUrl})`}}>
                <span class="title-container">
                    <span class="title">{title}</span>
                    <span class="subtitle">{desc}</span>
                </span>
            </a>
    );
}

export { Project }