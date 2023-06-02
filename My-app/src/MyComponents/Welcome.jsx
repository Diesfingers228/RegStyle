import React from 'react';
import '../App.css';

function Welcome({setReg}) {
    let style = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    };

    // styleBody
    document.body.style.backgroundColor = 'rgb(247, 146, 106)';

  return (
    <>
    <div style={style}>
    <h1>Добро пожаловать!</h1>
    <button  className='back-btn' onClick={() => {localStorage.clear(); setReg(false)}}>Вернуться на сайт регистрации</button>
    </div>
    </>
  )
}

export default Welcome