import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { url } from "inspector";
import {Container, ContainerTop} from "./styles.js";

export default function About() {
    const year = new Date().getFullYear();
    const [showGh, setShowGh] = React.useState("/icons/github.svg");
    const [showLI, setShowLI] = React.useState("/icons/linkedin.svg");
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="svROS"
                        icon="/icons/code.svg"
                        description="Analysing tool that verifies Observational Determinism in any ROS2 security configuration using model-checking through the Alloy framework."
                        url="https://github.com/ilmmr/svROS"
                        />
                    <AboutCard
                        title="railML Utilities"
                        icon="/icons/design.svg"
                        description="Analysing tool that verify misconfigurations from railML using model-checking through the Alloy framework."
                        url="https://github.com/pedrordgs/RailML-Utilities"
                        />
                    <AboutCard
                        title="Web and Mobile Applications"
                        icon="/icons/phone.svg"
                        description="Academic experience in building apps with REST APIs."
                        url="https://github.com/ilmmr/"
                        />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">ABOUT ME</h5>
                    <h1 className="white"><span className="wave">👋</span> Hi there, I&#39;m Luís Ribeiro</h1>
                    <p className="gray">💻 I&#39;m an engineer grad with a Masters on Informatics Engineering @UMinho.</p>
                    <br></br> 
                    <p className="gray">My areas of interest fall under the umbrella of <b>Language Processing</b> and <b>Formal Methods</b>.</p>
                    <br></br>
                    <h3 className="white"><i>&#34;Beauty is our business!&#34;</i></h3>
                    <p className="gray">🚀 My ultimate goal is to keep extending my knowledge in Computer Science, especially in the study of real-case scenarios, as the ones in distributed systems while making use of Formal Methods.</p>
                    
                    <br></br><br></br>
                    <h5 className="gray">SKILLS</h5>

                    <section className="about-container">
                      <div className="skill-card">
                      <SkillCard
                        icon="/images/mc.png"
                        description="Model Checking"
                        />
                      <SkillCard
                        icon="/images/pencil.png"
                        description="Property Specification"
                        />
                      <SkillCard
                        icon="/images/pg.png"
                        description="Parsing Grammars"
                        />
                      <SkillCard
                        icon="/images/script.png"
                        description="Language Scripting"
                        />
                      <SkillCard
                        icon="/images/haskell.png"
                        description="Haskell"
                        />
                      <SkillCard
                        icon="/images/python.png"
                        description="Python"
                        />
                      <SkillCard
                        icon="/images/js.png"
                        description="JavaScript"
                        />
                      <SkillCard
                        icon="/images/cpu.png"
                        description="Verilog"
                        />
                      </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    url: string
}

function AboutCard ({title, icon, description, url} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <a className="gray" href={url}>
                <button className="buttonbg">click here!</button>
            </a>
        </div>
    )
}

type Skill = {
  description: string,
  icon?: string | StaticImageData,
}

function SkillCard ({description, icon} : Skill) {
  return(
      <div className="light-bg">
          <p className="white">{description}</p>
          {icon && <Image src={icon} width={32} height={32}/> }
      </div>
  )
}
