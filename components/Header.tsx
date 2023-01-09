import React from "react";
import Image from "next/image";

export default function Header() {
    const [showGh, setShowGh] = React.useState("/icons/github.svg");
    const [showLI, setShowLI] = React.useState("/icons/linkedin.svg");
    return (
        <header>
            <div className="header flex dark-bg">
                <div style={{textAlign:"center"}}>
                    <img src="/pic3.png" width={250} height={250} alt="luis"/> 
                    <h3 className="white">Luís Ribeiro</h3>
                    <h1 className="white">Software Engineer</h1>
                    <p className="gray"><i>&#34;Coding is to programming as typing is to writing.&#34;</i></p>
                    <div>
                        <a href="/CurriculumVitae.pdf" target="blank">
                            <button className="buttonbg">Curriculum Vitae</button>
                        </a>
                        <a href="mailto:lmmr_@outlook.pt" target="blank">
                            <button className="buttonnobg">Contact me</button>
                        </a>
                    </div>
                    <div>
                        
                            <a className="linkedin" href="https://www.linkedin.com/in/lmmribeiro" target="_blank" rel="noreferrer"
                            >
                                <Image className="changable" alt="git" src={showLI} width={40} height={40} />
                            </a>
                        
                        
                            <a href="https://github.com/ilmmr" target="_blank" rel="noreferrer"
                            >
                                <Image className="changable" alt="git" src={showGh} width={40} height={40} />
                            </a>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}