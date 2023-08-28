import React from 'react'
import { Container } from './SideBarItemStyles'

import logoForAdmin from '../../assets/mdi-light_view-dashboard.svg'; // Importe a imagem corretamente
import logoForUser from '../../assets/editor memo note pad outline stroke.svg'; // Importe a imagem corretamente

export interface ISideBarItemProps {
  title: string;
  icon: string
}


export const SideBarItem = ({title, icon} : ISideBarItemProps)  => {
  return (
    <Container>
      <img src={icon === 'admin' ? logoForAdmin : logoForUser } width={23.83} height={24} />

      <span>{title}</span>
      </Container>
  )
}
