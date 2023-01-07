import React from "react";
import Image, { StaticImageData } from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();
    const [showGh, setShowGh] = React.useState("/icons/github.svg");
    const [showLI, setShowLI] = React.useState("/icons/linkedin.svg");
    return (
        <footer className="dark-bg flex justify-space">
            <div className="flex">
            <ul className="flex">
                        <li>
                            <a className="linkedin" href="https://www.linkedin.com/in/lmmribeiro" target="_blank" rel="noreferrer"
                            >
                                <Image alt="git" src={showLI} width={40} height={40} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ilmmr" target="_blank" rel="noreferrer"
                            >
                                <Image alt="git" src={showGh} width={40} height={40} />
                            </a>
                        </li>
        </ul>
        <span style={{color:"white"}}><b>|</b></span>
        <span style={{color:"white"}}><b>Luís Ribeiro {year}</b></span>
        </div>
        </footer>
    )
}