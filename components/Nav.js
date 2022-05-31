import React from 'react'
import navStyles from '../styles/navStyles.module.css'
const Nav = () => {
  return (
    <nav className={navStyles.bar}>
        
        <input placeholder={'Keyword'}></input> 
        <button>Search</button>       
    </nav>
  )
}

export default Nav