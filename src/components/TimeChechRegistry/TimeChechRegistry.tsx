import React from 'react'
import { Container } from './Styles'

function formatDate(dateTimeString: string | number | Date) {
  const date = new Date(dateTimeString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Mês é baseado em zero, então adicionamos 1
  const year = date.getFullYear().toString().substr(-2); // Pegue os dois últimos dígitos do ano
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

export const TimeChechRegistry = ({ userData }: any) => {
  return (
    <Container>

      <div id="quadradinhoRoxo" style={{ marginLeft: '14px', marginRight: '40px' }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", justifyContent: 'start', marginRight: 110 }}>
        <span style={{
          color: 'var(--grey, #20292E)',
          fontFamily: 'Poppins',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: '0.44px',
          textAlign: 'left',
          padding: '0',
          height: '25px'

        }}>{userData.user.name}</span>
        <span style={{
          color: 'var(--grey, #20292E)',
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          letterSpacing: '0.32px',
          textAlign: 'left',
          opacity: '0.5'
        }}>{userData.id}</span>
      </div>
      <span className="lightText" style={{ marginLeft: '309px', position: 'absolute' }}>
        {formatDate(userData.created_at)}
      </span>
      <span className="lightText" style={{ marginLeft: '566px', position: 'absolute' }}>{formatTime(userData.created_at)}</span>
        
    </Container>
  )
}
