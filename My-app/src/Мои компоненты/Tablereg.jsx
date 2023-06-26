import React from 'react'
import { useState } from 'react';
import '../App.css'
import { useDispatch } from 'react-redux'
import {redForm} from '../store/Slices/FormSlice'


export default function Tablereg() {
  let [window, setWindow] = useState('hidden');
  const dispatch = useDispatch();

  function wind() {
    if (window === 'hidden') {
      setWindow('')
    }
    else {
      setWindow('hidden')
    }
  };

  let style = {
      visibility: window,
  };
  
 return (
   <>
   <div className='reg'>
   <button  onClick={wind}>{style.visibility === 'hidden'? 'Показать окно регистрации' : 'Скрыть окно регистрации'}</button>
   
   <form className='form' style={style} method='POST' onSubmit={(e) => {e.preventDefault(); const info = [e.target[0].value, e.target[1].value, e.target[2].value]; dispatch(redForm({info}))}}>
   <input placeholder='Никнейм' type="text"  required/>
   <input placeholder='Пароль' type="password"  required/>
   <input placeholder='Email' type="email"  required/>
   <button type = 'submit'>Войти</button>
   <button type = 'reset' >Сбросить</button>
   </form>
   </div>
   </>
  );
}
