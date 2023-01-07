import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    const year = new Date().getFullYear();
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
                    <h1 className="white">👋 Hi there, I&#39;m Luís Ribeiro</h1>
                    <p className="gray">💻 I'm an engineer grad with a Masters on Informatics Engineering @UMinho. </p>
                    <br></br> 
                    <p className="gray"><b>λ.</b> My areas of interest fall under the umbrella of <b>Language Processing</b> and <b>Formal Methods</b>.</p>
                    <br></br>
                    <h3 className="white">"Beauty is our business!"</h3>
                    <p className="gray">🚀 My ultimate goal is to keep extending my knowledge in Computer Science, especially in the study of real-case scenarios, as the ones in distributed systems while making use of Formal Methods.</p>
                    <ul className="flex">
                    <li>
                        <a href="https://www.linkedin.com/in/lmmribeiro" target="_blank" rel="noreferrer">
                            <Image src="/icons/linkedin.svg" width={40} height={40} alt="linkedin-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ilmmr" target="_blank" rel="noreferrer">
                            <Image src="/icons/github.svg" width={40} height={40} alt="github-icon" />
                        </a>
                    </li>
                    </ul>
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