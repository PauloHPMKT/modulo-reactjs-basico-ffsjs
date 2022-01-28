import React, { useState } from 'react'

import Albums from './pages/Albums';
import Counter from './pages/Counter';
import Template from './templates/Template';
import Users from './pages/Users';

import './App.css'

const defaultPage = 'albums'

const pages = {
  albums: {
    text: 'Albuns',
    component: Albums
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuário',
    component: Users,
  }
}

function App() {

  const[page, setPage] = useState(defaultPage)

  const handleOnChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].component
  

  return(
    <Template 
      pages={pages} 
      activePage={page} 
      onChangePage={handleOnChangePage}
    >
      {Page && <Page />}
    </Template>
  )
}

export default App
