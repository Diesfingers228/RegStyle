import React from 'react'
import { useDispatch } from 'react-redux'
import { exit } from '../store/Slices/FormSlice'

function Welcome() {
const dispatch = useDispatch();

  return (
    <>
    <div className='div-welcome' >
    <h1>Добро пожаловать!</h1>
    <h1> {localStorage.getItem('0')}</h1>
    <button onClick={() => {dispatch(exit())}}>Выйти</button>
    </div>
    </>
  )
}

export default Welcome