import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box, Typography} from "@mui/material";
import {info} from "../Info";
import styled from "styled-components";
import classNames from 'classnames';

const ArrowU = styled.div`
a span {
   position: absolute;
   top: auto;
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
   transition: 2s all ease;
   animation-delay: 0.75s;
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
    const nickname  = info.nickname.toLowerCase()

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{nickname} $</span> cd programming
            </p>
            <p><span style={{color: info.baseColor}}>programming <span
                className={Style.green}></span> $</span> cat languages</p>
            <div style={{fontSize: "1rem"}}>
              <p>{info.programming}</p>
              <p>{info.programming1}</p>
              <p>{info.programmingl}</p>
            </div>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{nickname} $</span> cd interests</p>
            <p><span style={{color: info.baseColor}}>interests <span
                className={Style.green}></span> $</span> ls</p>
            <ul style={{fontSize: "1rem"}}>
                {info.interests.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function hoobies() {
      return <>
          <p><span style={{color: info.baseColor}}>{nickname} $</span> cd me</p>
          <p><span style={{color: info.baseColor}}>me <span
              className={Style.green}></span> $</span> cat activities</p>
          <div style={{fontSize: "1rem"}}>
            <p>{info.activities1}</p>
            <p>{info.activities2}</p>
            <p>{info.activities3}</p>
          </div>
      </>;
    }


    function aboutMe() {
      return <>
          <p><span style={{color: info.baseColor}}>{nickname} $</span> cd me</p>
          <p><span style={{color: info.baseColor}}>me <span
              className={Style.green}></span> $</span> cat about</p>
          <div style={{fontSize: "1rem"}}>
          <p>Greetings  <Box className={Style.wave}>👋</Box></p>
            <p>{info.bio3} {info.bio1}</p>
            <p>{info.bio2}</p>
            <p>{info.goal}</p>
            <p style={{textAlign:"center", fontStyle:"italic", color:"#777777"}}>&#34;Beauty is our business.&#34;</p>
          </div>
      </>;
   }

    return (
        <div className={classNames(Style.about)} id="about">
            <br></br><br></br><br></br><br></br>
            <ArrowU>
                <a href="#home"><span></span></a>
            </ArrowU>
            <br></br><br></br>
            <h2>{info.intro}</h2>
            <Typography textAlign="center">👨‍💻 From @UMinho</Typography>
            <Typography textAlign="center">{info.short}</Typography>
            <Box display={'flex'} className={Style.terminals} justifyContent={'center'} alignItems={'center'} mt={'3rem'}>
                <Terminal text={aboutMe()}/>
                <Terminal text={hoobies()}/>
            </Box>
            <Box display={'flex'} className={Style.terminals} justifyContent={'center'} alignItems={'center'}>
                <Terminal text={skillsText()}/>
                <Terminal text={miscText()}/>
            </Box>
        </div>
    )
}