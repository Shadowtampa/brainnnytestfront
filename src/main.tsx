import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { client } from './graphql/client'
import { ApolloProvider } from '@apollo/client'
import AppRouter from './routes/root'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
