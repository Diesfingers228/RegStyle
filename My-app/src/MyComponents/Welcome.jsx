import React from 'react';
import '../App.css';

function Welcome({setReg}) {
    let style = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    };

    let styleH = {
      color: 'rgb(56, 33, 2)'
    }

    // styleBody
    document.body.style.backgroundColor = 'rgba(255, 222, 173)';

  return (
    <>
    <div style={style}>
    <h1 style={styleH}>Добро пожаловать!</h1>
    <button  className='back-btn' onClick={() => {localStorage.clear(); setReg(false)}}>Вернуться на сайт регистрации</button>
    </div>
    </>
  )
}

export default Welcome