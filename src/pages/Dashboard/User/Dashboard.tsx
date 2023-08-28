import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { FETCH_TIMES_FOR_USER, TIME_CHECK } from '../../../graphql/queries';
import useAuth from '../../../hooks/useService';
import { AdminTable, Container, RegistrarPonto } from './DashboardStyles';

import { Sidebar } from '../../../components/Sidebar/Sidebar';
import { TimeChechRegistry } from '../../../components/TimeChechRegistry/TimeChechRegistry';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

import Modal from 'react-modal';

import logoForUser from '../../../assets/clarity_clock-solid.svg'; // Importe a imagem corretamente



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-20%, -50%)',
    width: '400px',
    height: '477px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'none'
  },
};


export const Dashboard = () => {


  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setCurrentTime(new Date()); // Atualiza o estado da hora
    setCurrentDate(new Date()); // Atualiza o estado da data
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }



  const [times, setTimes] = useState<[]>([]);

  const { jwt, userId, role } = useAuth();


  const { loading, error, data } = useQuery(FETCH_TIMES_FOR_USER, {
    variables: { userId }, // Passa userId como variável
    context: {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  });

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 9;
  const pageCount = Math.ceil(times.length / itemsPerPage);

  const handlePageClick = (selectedPage: { selected: React.SetStateAction<number>; }) => {
    setCurrentPage(selectedPage.selected);
  };

  const navigate = useNavigate();

  function formatDate(dateTimeString: string | number | Date) {
    const date = new Date(dateTimeString);
    const day = date.getDate();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adiciona um zero à esquerda se o mês for menor que 10
    const year = date.getFullYear().toString().substr(-2);
    return `${day}/${month}/${year}`;
  }


  function formatTime(dateTimeString: string | number | Date) {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}h`;
  }

  function formatTwoDigits(number: number) {
    return number.toString().padStart(2, '0');
  }

  const [addTimeRegistry] = useMutation(TIME_CHECK);

    const handleAddTimeRegistry = async () => {
      try {
        // Chama a mutação para adicionar um novo registro de tempo
        const { data } = await addTimeRegistry({
          variables: {
            input: {
              data: {
                user: userId,
              },
            },
          },  
          context: {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          },
        });

        if (data && data.createRegisteredTime && data.createRegisteredTime.registeredTime) {
          // Atualize o estado com o novo registro de tempo
          setTimes((prevTimes) => [...prevTimes, data.createRegisteredTime.registeredTime]);
        }

        setIsOpen(false); // Fecha o modal após adicionar o registro
      } catch (error) {
        console.error('Error adding time registry:', error);
        // Lidar com erro se necessário
      }
    };



  useEffect(() => {
    if (data) {
      // Lida com a resposta da query
      console.log(data.registeredTimes);

      setTimes(data.registeredTimes);

    }
    if (error) {
      // Lida com o erro
      console.error(error);

      alert("OCORREU UM ERRO!");
    }
  }, [data, error]);

  useEffect(() => {
    if (role === 'admin') navigate("/dashboard");

  })


  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Sidebar sidebarItems={[{ title: "Meus Registros", icon: 'user' }]} />
      <AdminTable>
        <RegistrarPonto onClick={openModal}>Registrar Ponto</RegistrarPonto>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <span style={{
            color: '#20292E',
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
            textAlign: 'center',
            marginBottom: '25px'
          }}>Registrar Novo ponto</span>
          <img src={logoForUser} width={100} height={100} />
          <span style={{
            color: '#330693',
            fontFamily: 'Poppins',
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '5px'
          }}>{formatTime(currentTime)}</span>
          <span style={{
            color: '#330693',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            opacity: '0.5',
            marginBottom: '20px'
          }}>{formatDate(currentDate)}</span>
          <button style={{
            width: '200px',
            height: '50px',
            borderRadius: '5px',
            background: '#330693',
            color: '#FFF',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            marginBottom: '10px'
          }} onClick={handleAddTimeRegistry}>Bater Ponto</button>
          <button style={{
            width: '200px',
            height: '50px',
            borderRadius: '5px',
            border: '1px solid #330693',
            color: '#330693',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
          }} onClick={() => setIsOpen(false)}>Cancelar</button>
        </Modal>
        <table>
          <thead>
            <tr>
              <span>Colaborador</span>
              <span style={{ marginLeft: 164 }}>Data</span>
              <span style={{ marginLeft: 195 }}>Hora</span>
            </tr>
          </thead>
          <tbody>
            {times
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((time) => (

                <TimeChechRegistry key={time.id} userData={time} />
                // <div>
                //   <div id="quadradinhoRoxo"></div>
                //   <div>
                //     <span>{time.user.name}</span>
                //     <span>{time.id}</span>
                //   </div>


                //   {formatDate(time.created_at)}
                //   {formatTime(time.created_at)}
                // </div>
              ))}
          </tbody>
        </table>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
        />
      </AdminTable>
    </Container >
  )
}
