import { SidebarContainer } from './SIdebarStyles'

import logo from '../../assets/Group 69.svg';
import sair from '../../assets/ant-design_logout-outlined.svg';
import { ISideBarItemProps, SideBarItem } from '../SideBarItem/SideBarItem';
import useAuth from '../../hooks/useService';
import { useNavigate } from 'react-router-dom';

interface ISidebarProps {
  sidebarItems: ISideBarItemProps[];
}

export const Sidebar = ({sidebarItems} : ISidebarProps) => {

  const { clearAuthData } = useAuth();

  const navigate = useNavigate();


  const handleLogout = () => {
    clearAuthData();
    navigate("/");
  };

  return (
    <SidebarContainer>
      <img src={logo} width={134} height={31.17} />

      {sidebarItems.map((sideBarItem, index) => (
        <SideBarItem key={index} title={sideBarItem.title} icon={'admin'}/>
      ))}


      <button type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={handleLogout}>
        <img src={sair} alt="Logo" width={24} height={24} style={{ paddingBottom: '10px' }} />
        <span style={{ marginLeft: '10px' }}>Sair</span>
      </button>


    </SidebarContainer>
  )
}
