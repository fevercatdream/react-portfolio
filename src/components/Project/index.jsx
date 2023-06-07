import React, { useState } from "react";
import "./style.css";

function Project ({title, desc, imageUrl, url}){    
    return(
            <a class="card" href="" target="_blank" rel="noopener" style={{ backgroundImage: `url(${imageUrl})`}}>
                <span className="title-container">
                    <span className="title">{title}</span>
                    <span className="subtitle">{desc}</span>
                    <a className="icon-link" href={url} target="_blank" rel="noopener">
                        <img id="github-id" className="bi bi-github" aria-hidden="true" src="/images/github.svg" />
                    </a>
                </span>
            </a>
    );
}

export { Project }