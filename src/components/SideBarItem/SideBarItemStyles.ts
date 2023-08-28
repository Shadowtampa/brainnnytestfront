import { styled } from "styled-components";

export const Container = styled.div`

padding: 0;
margin: 0;

display: flex;
align-items: center;

padding-top: 43px;
padding-bottom: 43px;
padding-right: 44px;
padding-left: 20px;

  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-left: 4px solid #330693;
  border-bottom:1px solid rgba(0, 0, 0, 0.08);



width: 116px;
height: 24px;
flex-shrink: 0;

span{
height: 18px;
flex-shrink: 0;

color: var(--principal-color, #330693);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;

margin-bottom: -7px;
}

`;