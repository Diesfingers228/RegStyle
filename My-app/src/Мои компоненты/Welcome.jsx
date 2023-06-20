import React from 'react'

function Welcome({setReg}) {
  console.log(localStorage)
  return (
    <>
    <div className='div-welcome' >
    <h1>Добро пожаловать!</h1>
    <h1> {localStorage.getItem('Nick')}</h1>
    <button onClick={() => {localStorage.clear(); setReg(localStorage.length)}}>Выйти.</button>
    </div>
    </>
  )
}

export default Welcome