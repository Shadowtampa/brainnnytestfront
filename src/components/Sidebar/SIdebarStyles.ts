import { styled } from "styled-components";


export const SideBar = styled.div`
width: 180px;
height: 1060px;
flex-shrink: 0;

display: flex;
flex-direction: column;
align-items: center;

margin-right: 28px;

border: 1px solid rgba(0, 0, 0, 0.00);
background: #FFF;
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);

img{
  margin-top: 40px;
  margin-bottom: 31px;
}

button{
 
  position: absolute;
  bottom: 20px;
  left: 10px;

  width: 65px;
height: 24.207px;
flex-shrink: 0;

  background-color: transparent;
  border: 1px solid transparent; /* Adicione uma borda para que o botão seja visível */
  padding: 10px 20px; /* Ajuste o padding conforme necessário */
  color: #000; /* Cor do texto */
  cursor: pointer; /* Mudar o cursor para indicar que é clicável */


}

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
}

.page-item {
  margin: 0;
  padding: 0;
  display: flex;
}

.page-link {
  color: #333; /* Cor padrão para os links */
  background-color: transparent; /* Fundo transparente */
  border: none; /* Sem borda */
  padding: 0.5rem 1rem;
  transition: background-color 0.2s, color 0.2s; /* Transição suave */
  cursor: pointer;
}

.page-item.active .page-link {
  background-color: #333; /* Cor de fundo ativa */
  color: #fff; /* Cor do texto ativo */
  border-radius: 0.25rem; /* Borda arredondada */
}

`;