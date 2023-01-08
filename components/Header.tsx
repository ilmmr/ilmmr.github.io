import React from "react";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div className="header flex dark-bg">
                <div style={{textAlign:"center"}}>
                    <img src="/pic3.png" width={250} height={250} alt="luis"/> 
                    <h3 className="white">Luís Ribeiro</h3>
                    <h1 className="white">Software Engineer</h1>
                    <p className="gray"><i>&quote;Coding is to programming as typing is to writing.&quote;</i></p>
                    <span>
                        <a href="/CurriculumVitae.pdf" target="blank">
                            <button className="buttonbg">Curriculum Vitae</button>
                        </a>
                        <a href="mailto:lmmr_@outlook.pt" target="blank">
                            <button className="buttonnobg">Contact me</button>
                        </a>
                    </span>
                </div>
            </div>
        </header>
    )
}