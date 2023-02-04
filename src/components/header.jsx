import React from 'react'

function Header({handleModalStatus}) {
  return (
    <div>
      <h2 className="header__title">Projects Board</h2>
      <button className='add__button' onClick={handleModalStatus}>Add +</button>
    </div>
  )
}

export default Header;