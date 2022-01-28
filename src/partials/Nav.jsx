import React from 'react'

const Nav = ({ onChangePage, pages }) => {

  const pageNames = Object.keys(pages)

  return(
    <nav>
      {
        pageNames.map(page => <button onClick={() => onChangePage(page)}>{pages[page].text}</button>)
      }
    </nav>
  )
}

export default Nav


/*
passando uma função como parametro: 
1 - a prop é declarada no App
2 - a prop é recebida no Template
3 - a prop é direcionada para o component Nav

*/