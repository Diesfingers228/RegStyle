import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Tablereg({setReg}) {
    function useHover() {
        const [value, setValue] = useState(false);
        const ref = useRef(null);
        const handleMouseOver = () => setValue(true);
        const handleMouseOut = () => setValue(false);
        useEffect(
          () => {
            const node = ref.current;
            if (node) {
              node.addEventListener("mouseover", handleMouseOver);
              node.addEventListener("mouseout", handleMouseOut);
              return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
              };
            }
          },
          [ref.current] // Recall only if ref changes
        );
        return [ref, value];
      }
      const [hoverRef, isHovered] = useHover();
    
    let styles = {
      margin: '10px',
      color: 'black',
    };


    function submit(e) {
        e.preventDefault()
         localStorage.setItem(`date`, e.target.dates.value)
         localStorage.setItem(`name`, e.target.names.value)
         localStorage.setItem(`surname`, e.target.surnames.value)
         localStorage.setItem(`nickname`, e.target.nicknames.value)
         localStorage.setItem(`email`, e.target.mails.value)
         localStorage.setItem(`password`, e.target.passwords.value)
         if (localStorage.length == 6) {
          setReg(e.target.passwords.value)
         };
         
    };
    // styleBody
    document.body.style.backgroundColor = '';

  return (
<main className='main'>
<aside className='aside'>
      <p className='p-in-aside'> Добро пожаловать на сайт регистрации!</p>
      <p className='p-in-aside'>Чтобы зарегестрироваться нужно:</p>
      <ul>
        <li className='li-in-aside'>В поле "Дата рождения" введите свою дату рождения.</li>
        <li className='li-in-aside'>В поле "Имя" введите свое имя.</li>
        <li className='li-in-aside'>В поле "Фамилия" введите свою фамилию.</li>
        <li className='li-in-aside'>В поле "Никнейм" придумайте свое имя отображаемое в профиле.</li>
        <li className='li-in-aside'>В поле "Электронная почта" введите свою почту.</li>
        <li className='li-in-aside'>В поле "Пароль" придумайте пароль.</li>
      </ul>
    </aside>
    
    <form onSubmit={submit} id="form" ref={hoverRef}  className='registr' action='https://vk.com/id392344540'  method='post'>
      <div className='table-div-h'>
   <h2 >Регистрация</h2>
   <h3 >Введите свои данные</h3>
   </div>
   <input name='dates'  type='date' style={styles} className={isHovered ? 'registr-value-data-second' : 'registr-value-data'} placeholder='Дата рождения' required></input>
   <input name='names'   type='text' style={styles} className={isHovered ? 'registr-value' : 'registr-value-two'} placeholder='Имя' required></input>
   <input name='surnames'   type='text' style={styles} className={isHovered ? 'registr-value-two' : 'registr-value'} placeholder='Фамилия' required></input>
   <input name='nicknames'    style={styles} className={isHovered ? 'registr-value' : 'registr-value-two'} placeholder='Никнейм' required></input>
   <input name='mails'   type='email' style={styles} className={isHovered ? 'registr-value-two' : 'registr-value'} placeholder='Электронная почта' required></input>
   <input name='passwords'   type='password' style={styles} className={isHovered ? 'registr-value' : 'registr-value-two'} placeholder='Пароль' required></input>
   <input name='submit'   type='submit' style={styles} className={isHovered ? 'submit' : 'submit'} ></input>
   <input name='reset' value="Стереть"   type='reset' style={styles} className={isHovered ? 'submit' : 'submit'} ></input>
   </form>
   </main>
  )
}
