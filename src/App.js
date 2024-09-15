import logo from './img/logo.png';
import flask from './img/flask.png';
import menu from './img/menu.svg';
import happy from './img/ori.png';
import searchBtn from './img/search.png';
import keyboard from './img/keyboard.png';
import mike from './img/mike.png';
import camera from './img/camera.png';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

function App() {

  const [value, newValue] = useState('');

  const search = (e) => {
    e.preventDefault()
    window.location.href = 'https://www.google.com/search?q=' + value
  }

  return (
    <div>
      <header className='head'>
        <div className='left-box'>
          <a href='https://about.google/?fg=1&utm_source=google-KR&utm_medium=referral&utm_campaign=hp-header' className='google-left'>Google 정보</a>
          <a href='https://store.google.com/KR/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=ko&pli=1' className='google-left'>스토어</a>
        </div>
        <div className='right-box'>
          <a href='https://mail.google.com/mail'>Gmail</a>
          <a href='https://www.google.com/imghp?hl=ko&ogbl'>이미지</a>
          <a href='https://labs.google.com/search?source=hp'>
            <img src={flask} className='head-right-img'></img>  
          </a>
          <a>
            <img src={menu} className='head-right-img'></img>
          </a>
          <a>
            <img src={happy} className='head-right-img2'></img>
          </a>
        </div>
      </header>
      <div className='logo-box'>
        <img className= "logo" src={logo}></img>
      </div>
      <div className='middle-box'>
        <form className='searchbar' onSubmit={search}>
          <img src={searchBtn} className='search'></img>
          <input className='search-box' value = {value} onChange={(e) => newValue(e.target.value)}/>
          <img src={keyboard} className='key'></img>
          <img src={mike} className='mike'></img>
          <img src={camera} className='camera'></img>
        </form>
      </div>
      <div className='btnBar'>
        <div className='google-search'>
          Google 검색
        </div>
        <div className='Feeling' onClick={() => window.open("https://doodles.google/" , '_self')}>
          I'm Feeling Lucky
        </div>
      </div>
      <div className='middle-foot'>

      </div>
      <footer className='footer'>
        <div className='foot-top'>
          <p className='korea'>대한민국</p>
        </div>
        <div className='foot-bottom'>
          <div className='fl'>
            <a href='https://ads.google.com/intl/ko_kr/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'>광고</a>
            <a href='https://www.google.com/intl/ko_kr/business/'>비즈니스</a>
            <a href='https://www.google.com/search/howsearchworks/?fg=1'>검색의 원리</a>
          </div>
          <div className='fr'>
            <a href='https://policies.google.com/privacy?hl=ko&fg=1'>개인정보처리방침</a>
            <a href='https://policies.google.com/terms?hl=ko&fg=1'>약관</a>
            <a>설정</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
