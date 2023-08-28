import { Container, Form, FormContainer, Greetings, Layer } from './LandingStyles'

import greetingsImage from '../../assets/view_usp=sharing.svg'; // Importe a imagem corretamente
import logo from '../../assets/logo.svg'; // Importe a imagem corretamente
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/queries';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useService';
import { useNavigate } from 'react-router-dom';


export const Landing = () => {

  const [loginMutation] = useMutation(LOGIN);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const {saveAuthData, jwt } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await loginMutation({
        variables: {
          identifier: email,
          password: password
        }
      });

      // Lida com a resposta da mutação
      console.log(result.data);

      saveAuthData(result.data.login.jwt, result.data.login.user.role.name, result.data.login.user.id);

      navigate("/dashboard");

    } catch (err) {
      // Lida com o erro
      console.error(err);

      alert("USUÁRIO OU SENHA INVÁLIDO!");
    }
  };

  useEffect(() => {
    if (jwt) {
      navigate("/dashboard");
    }
  });

  return (
    <Container>
      <Layer>
        <Greetings>
          <img src={greetingsImage} width={585} height={663} />
          <span id='title'>Bem vindo ao PontoGo</span>
          <span id='body'>Aqui você fará toda gestão do <br /> seu sistema de pontos.</span>
        </Greetings>
        <FormContainer>
          <img src={logo} width={322.39} height={75} />
          <Form>

            <div>
              <span id='email'>Email</span>
              <input name="email"  type='email' placeholder='example@email.com' onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
              <span id='password'>Senha</span>
              <input name="password"  type='password' placeholder='*************' onChange={(e) => setPassword(e.target.value)}/>
            </div>


            <span id='pass_forgot'>Esqueci minha senha</span>

            <button id="submit" type='button' onClick={handleLogin}>Entrar</button>
          </Form>
        </FormContainer>
      </Layer>

    </Container>
  )
}
