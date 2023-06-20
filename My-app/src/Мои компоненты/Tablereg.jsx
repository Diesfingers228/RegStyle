import React from 'react'
import { useState } from 'react';
import '../App.css'


export default function Tablereg({setReg}) {
  let [window, setWindow] = useState('hidden');

  let arrStorage = ['', '', ''];

  function wind() {
    if (window == 'hidden') {
      setWindow('')
    }
    else {
      setWindow('hidden')
    }
  }

  let style = {
      visibility: window,
  }

  function submit(e) {
     e.preventDefault();
     localStorage.setItem('Nick', arrStorage[0]);
     localStorage.setItem('Password', arrStorage[1]);
     localStorage.setItem('Email', arrStorage[2]);
     if (localStorage.length == 3) {
      setReg(localStorage.length);
      arrStorage = null
     }
  }
  
 return (
  
   <>
   <div className='reg'>
   <button  onClick={wind}>{style.visibility == 'hidden'? 'Показать окно регистрации' : 'Скрыть окно регистрации'}</button>
   
   <form className='form' style={style} method='POST' onSubmit={submit}>
   <input onChange={(e) => {arrStorage[0] = e.target.value;}} placeholder='Никнейм' type="text"  required/>
   <input onChange={(e) => {arrStorage[1] = e.target.value;}} placeholder='Пароль' type="password"  required/>
   <input onChange={(e) => {arrStorage[2] = e.target.value;}} placeholder='Email' type="email"  required/>
   <button type = 'submit'>Войти</button>
   <button type = 'reset' >Сбросить</button>
   </form>
   </div>
   </>
  
  );
}
