import styled from 'styled-components';

export const Container = styled.div`
 width: 100vw;
  height: 100vh;
background: radial-gradient(45.56% 37.94% at 33.33% 45.34%, rgba(138, 83, 255, 0.80) 0%, rgba(151, 105, 249, 0.67) 28.85%, rgba(161, 123, 244, 0.56) 71.24%, rgba(153, 109, 248, 0.37) 89.40%, rgba(138, 83, 255, 0.00) 100%);

`;

export const Layer = styled.div`

width: 100%;
height: 100%;


background: rgba(255, 255, 255, 0.70);
backdrop-filter: blur(25px);

display: flex;
align-items: center;
justify-content: center;
`;

export const Greetings = styled.div`
width: 585px;
flex-shrink: 0;

margin-right: 150px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

#title{
  color: var(--principal-color, #330693);
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

#body{
  color: var(--principal-color, #330693);
  text-align: center;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  opacity: 0.7;
}
`;

export const FormContainer = styled.div`
  width: 400px;
  height: 471px;
  flex-shrink: 0;
`;

export const Form = styled.form`

display: flex;
flex-direction: column;

div{
  display: flex;
  flex-direction: column;

  width: 400px;
height: 75px;
flex-shrink: 0;

margin-bottom: 20px;
}

input{
  border-radius: 5px;
border: 1px solid rgba(32, 41, 46, 0.30);
background: #FFF;

width: 400px;
height: 45px;
flex-shrink: 0;

padding-left: 20px;
}

#email, #password{
  color: var(--grey, #20292E);
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;


}

#pass_forgot{
  color: var(--principal-color, #330693);
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;

margin-bottom: 30px;
}

#submit{

width: 400px;
height: 50px;
flex-shrink: 0;

border-radius: 5px;
background: var(--principal-color, #330693);


  color: var(--white, #FFF);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

}


`;