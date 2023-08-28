import styled from 'styled-components';

export const Container = styled.div`
position: relative;

display: flex;
align-items: start;

ul{
  list-style-type: none;
  padding: 0;
}
`;

export const StyledLi = styled.li<{ isLast: boolean }>` // Adicione o tipo para a propriedade isLast
  margin-bottom: ${({ isLast }) => (isLast ? '0' : '15px')};
`;

export const SideBar = styled.div`
  position: fixed; // Fixa o componente no topo da página
  top: 0; // Posição absoluta no topo
  left: 0; // Posição absoluta à esquerda
  width: 180px;
  height: 100vh;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(0, 0, 0, 0.00);
  background: #FFF;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);

  img {
    margin-top: 40px;
    margin-bottom: 31px;
  }

  button {
    position: absolute;
    bottom: 20px;
    width: 65px;
    height: 24.207px;
    flex-shrink: 0;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 10px 20px;
    color: #000;
    cursor: pointer;
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
    color: #333;
    background-color: transparent;
    border: none;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s, color 0.2s;
    cursor: pointer;
  }

  .page-item.active .page-link {
    background-color: #333;
    color: #fff;
    border-radius: 0.25rem;
  }
`;


export const AdminTable = styled.div`
  width: 1202px;
  height: 868px;
  margin-top: 77px;

  color: var(--grey, #20292E);
font-family: Poppins;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.44px;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0 15px; /* Espaçamento vertical de 15px entre as linhas */
    border: none !important;
  }

  th, td {
    padding: 10px !important; /* Espaçamento interno nos elementos de tabela */
    border-bottom: 1px solid #ddd; /* Adicione uma borda inferior para separar as linhas */
    border: none !important;
  }

  th {
    background-color: transparent !important; /* Remova o plano de fundo do cabeçalho */
    border: none; /* Remova as bordas do cabeçalho */
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

 

  .pagination {
    display: flex;
    justify-content: flex-start; /* Alinhar à esquerda */

    list-style: none;
    padding: 0;

    li {
      margin: 0 5px;
      cursor: pointer;
      user-select: none;
      border: 1px solid #ccc;
      padding: 5px 10px;
      background-color: #f2f2f2;
      border-radius: 4px;
    }

    li.active {
      background-color: #333;
      color: #fff;
    }

    li:hover {
      background-color: #999;
    }


  }

  .userAndId{
    display: flex;

    div{
      display: flex;
      flex-direction: column;
    }
  }

  #quadradinhoRoxo{
    width: 5px;
height: 45px;
flex-shrink: 0;

border-radius: 30px;
background: var(--secundary-color, #8A53FF);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
  }

  th, td {
    /* ... (seus outros estilos) ... */
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
    position: relative; /* Adicione essa propriedade para que o ::after funcione */
  }

  /* Crie o espaço vazio entre as linhas */
  tbody tr:not(:last-child) td::after {
    content: '';
    display: block;
    height: 15px;
    position: absolute;
    bottom: -15px; /* Posicione o espaço vazio abaixo da célula */
    left: 0;
    width: 100%;
  }

  tr{
    width: 1200px;
height: 73px;
flex-shrink: 0;

border-radius: 5px;
  }

  table {
    border: none !important;
  }


`;

