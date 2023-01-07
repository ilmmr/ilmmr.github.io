import styled from "styled-components";

export const ButtonBG = styled.button`
  background-color: #4dba87;
  font-weight: 500;
  color: #2D2E32;
  font-family: 'Trebuchet MS';
  border: none;
  font-size: 18px;
  padding: 11px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  :hover, :active, :focus{
    background-color: #FFFFFF;
    color: #2D2E32;
  }
`
export const ButtonNoBG = styled.button`
  background-color: #00000000;
  font-weight: 500;
  font-family: 'Trebuchet MS';
  color: #2D2E32;
  border: 1px solid ;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  :hover, :active, :focus{
    border: 1px solid black;
    background-color: white;
    color:  #2D2E32;
  }
`