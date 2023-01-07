import React from "react";
import Image from "next/image";
import { ButtonBG, ButtonNoBG } from './buttons';

export default function Header() {
    return (
        <header>
            <div className="header flex light-bg">
                <div>
                    <h3 className="white">Luís Ribeiro</h3>
                    <h1 className="white">Software Engineer</h1>
                    <p className="gray"><i>"Coding is to programming as typing is to writing."</i></p>
                    <span>
                        <a href="/CurriculumVitae.pdf" target="blank">
                            <button className="buttonbg">Curriculum Vitae</button>
                        </a>
                        <a href="mailto:lmmr_@outlook.pt" target="blank">
                            <button className="buttonnobg">Contact me</button>
                        </a>
                    </span>
                </div>
                <img src="/ProfilePic.png" width={450} height={450} alt="luis"/> 
            </div>
        </header>
    )
}