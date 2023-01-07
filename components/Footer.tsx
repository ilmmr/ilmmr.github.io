import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span className="white"></span>
            <ul className="flex">
                <li>
                    <a href="https://www.linkedin.com/in/lmmribeiro" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ilmmr" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
                <li>
                    <a href="mailto:lmmr_@outlook.pt" target="_blank" rel="noreferrer">
                        <Image src="/icons/mail3.svg" width={24} height={24} alt="mail-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}