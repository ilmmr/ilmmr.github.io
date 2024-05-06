import React from 'react';
import Style from './Home.module.scss';
import me from "./self2.png";
import CV from "./CurriculumVitae.pdf"
import classNames from 'classnames';
import {Box, Stack, Typography} from "@mui/material";
import {info} from "./../Info";
import styled from "styled-components";

const ArrowD = styled.div`
a span {
   position: absolute;
   bottom: auto;
   left: 50%;
   width: 24px;
   height: 24px;
   margin-left: -12px;
   border-left: 1px solid ${ ({ color }) => color};
   border-bottom: 1px solid  ${ ({ color }) => color};
   -webkit-transform: rotate(-45deg);
   transform: rotate(-45deg);
   -webkit-animation: ard 1.5s infinite;
   animation: ard 1.5s infinite;
   transition: 2s all ease;
   box-sizing: border-box;
 }
 @-webkit-keyframes ard {
   0% {
     -webkit-transform: rotate(-45deg) translate(0, 0);
     opacity: 0;
   }
   50% {
     opacity: 1;
   }
   100% {
     -webkit-transform: rotate(-45deg) translate(-20px, 20px);
     opacity: 0;
   }
 }
 @keyframes ard {
   0% {
     transform: rotate(-45deg) translate(0, 0);
     opacity: 0;
   }
   50% {
     opacity: 1;
   }
   100% {
     transform: rotate(-45deg) translate(-20px, 20px);
     opacity: 0;
   }
}
`


function SocialIcon(props) {
   const {link, icon, label} = props;
   return (
       <a className={Style.icons} target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
           <i className={icon} aria-hidden="true"/>
       </a>
   );
}

export default function Home({darkMode}) {
   const color = darkMode ? "#f8f8f8" : "#1f1f1f";
   return (
      <Stack component={'main'} display="flex" textAlign={"center"} alignItems={'center'} spacing={2}>
         <Box className={classNames(Style.photo, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me}
              borderRadius={'50%'} p={'0.75rem'}/>
         <h3>{info.firstName} {info.lastName}</h3>
         <h1>{info.position}</h1>
         <a href={CV} target="blank">
            <button className={classNames(Style.shadowed)}>Curriculum Vitae</button>
         </a>
         <Typography fontStyle="italic" color="#777777">&#34;Coding is to programming what typing is to writing.&#34;</Typography>
         <Box component={'div'} display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize='2rem'>
               {info.socials.map((social, index) => (
                  <SocialIcon link={social.link} icon={social.icon} label={social.label} />
               ))}
         </Box>
         <ArrowD color={color}>
            <a href="#about"><span></span></a>
         </ArrowD>
      </Stack>
   )
}
