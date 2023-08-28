import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 5px;
  background: #FFF;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  height: 73px;

  #quadradinhoRoxo {
    margin-left: 14px;
    margin-right: 40px;
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    margin-right: 110px;

    .userName {
      color: var(--grey, #20292E);
      font-family: Poppins;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.44px;
      text-align: left;
      padding: 0;
      height: 25px;
    }

    .userId {
      display: flex;
width: 139px;
height: 16px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;

color: var(--grey, #20292E);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.32px;

opacity: 0.5;
    }
  }

  .lightText {
    color: var(--grey, #20292E);
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.44px;
    opacity: 0.6;
    position: absolute;

    &.date {
      margin-left: 309px;
    }

    &.time {
      margin-left: 566px;
    }
  }
`;