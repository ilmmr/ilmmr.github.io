import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box, Stack, Typography} from "@mui/material";
import {info} from "../Info";
import styled from "styled-components";

const ArrowU = styled.div`
a span {
   position: absolute;
   bottom: auto;
   left: 50%;
   width: 24px;
   height: 24px;
   margin-left: -12px;
   border-right: 1px solid ${ ({ color }) => color};
   border-top: 1px solid  ${ ({ color }) => color};
   -webkit-transform: rotate(-45deg);
   transform: rotate(-45deg);
   -webkit-animation: aru 1.5s infinite;
   animation: aru 1.5s infinite;
   box-sizing: border-box;
 }
 @-webkit-keyframes aru {
   0% {
     -webkit-transform: rotate(-45deg) translate(0, 0);
     opacity: 0;
   }
   50% {
     opacity: 1;
   }
   100% {
     -webkit-transform: rotate(-45deg) translate(20px, -20px);
     opacity: 0;
   }
 }
 @keyframes aru {
   0% {
     transform: rotate(-45deg) translate(0, 0);
     opacity: 0;
   }
   50% {
     opacity: 1;
   }
   100% {
     transform: rotate(-45deg) translate(20px, -20px);
     opacity: 0;
   }
 }
}
`

export default function About() {
    const firstName = info.firstName.toLowerCase()
    const nickname  = info.nickname.toLowerCase()
    const year = new Date().getFullYear();

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{nickname} $</span> cd programming
            </p>
            <p><span style={{color: info.baseColor}}>programming <span
                className={Style.green}></span> $</span> ls</p>
            <ul>
                {info.programming.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{nickname} $</span> cd interests</p>
            <p><span style={{color: info.baseColor}}>interests <span
                className={Style.green}></span> $</span> ls</p>
            <ul>
                {info.interests.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <div className={Style.about} id="about">
            <ArrowU>
                <a href="#home"><span></span></a>
            </ArrowU>
            <br></br><br></br>
            <h2>{info.intro} <Box className={Style.wave}>👋</Box></h2>
            <Typography textAlign="center">{info.bio1}</Typography>
            <Typography textAlign="center">{info.bio2}</Typography>
            <Typography textAlign="center" fontStyle="italic" color="#777777">&#34;Beauty is our business.&#34;</Typography>
            <Box display={'flex'} className={Style.terminals} justifyContent={'center'} alignItems={'center'} mt={'3rem'}>
                <Terminal text={skillsText()}/>
                <Terminal text={miscText()}/>
            </Box>
        </div>
    )
}