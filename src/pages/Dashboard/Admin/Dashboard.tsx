import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { FETCH_ALL_TIMES } from '../../../graphql/queries';
import useAuth from '../../../hooks/useService';
import { AdminTable, Container, StyledLi } from './DashboardStyles';

import { Sidebar } from '../../../components/Sidebar/Sidebar';
import { SideBarItem } from '../../../components/SideBarItem/SideBarItem';
import { TimeChechRegistry } from '../../../components/TimeChechRegistry/TimeChechRegistry';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';





export const Dashboard = () => {


  const navigate = useNavigate();

  const [times, setTimes] = useState<[]>([]);

  const { jwt, role } = useAuth();


  const { loading, error, data } = useQuery(FETCH_ALL_TIMES, {
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


  useEffect(() => {
    if (data) {

      setTimes(data.registeredTimes);

    }
    if (error) {
      // Lida com o erro
      console.error(error);

      alert("OCORREU UM ERRO!");
    }
  }, [data, error]);

  useEffect(() => {
    if (role === 'user') navigate("/meus-registros");

  })

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Sidebar sidebarItems={[{ title: "Dashboard" }]} />
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

                <TimeChechRegistry userData={time} />
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
