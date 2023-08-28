import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { FETCH_TIMES_FOR_USER } from '../../../graphql/queries';
import useAuth from '../../../hooks/useService';
import { AdminTable, Container } from './DashboardStyles';

import { Sidebar } from '../../../components/Sidebar/Sidebar';
import { TimeChechRegistry } from '../../../components/TimeChechRegistry/TimeChechRegistry';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';





export const Dashboard = () => {

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
        <table>
          <thead>
            <tr>
              <span >Colaborador</span>
              <span style={{ marginLeft: 164 }}>Data</span>
              <span style={{ marginLeft: 195 }}>Hora</span>
            </tr>
          </thead>
          <tbody>
            {times
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((time) => (

                <TimeChechRegistry key={ time.id} userData={time} />
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
    </Container>
  )
}
