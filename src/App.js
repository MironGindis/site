import React, { useState } from 'react';
import './App.scss';
import mainlogo from './assets/images/mainlogo.svg';
import secondblockClosses from './assets/images/secondblockClosses.svg';
import secondblockbg from './assets/images/secondblockbg.jpg';
import secondblockText from './assets/images/secondblockText.svg';
import crosses1 from './assets/images/crosses1.svg';
import crosses2 from './assets/images/crosses2.svg';
import crosses3 from './assets/images/crosses3.svg';
import DownArrow from './assets/images/DownArrow.svg';
import biglogosection from './assets/images/biglogosection.svg';
import wecan from './assets/images/wecan.svg';
import redlogo from './assets/images/redlogo.svg';
import whitelogo from './assets/images/whitelogo.svg';
import Photo from './assets/images/Photo.png';
import fingerprint from './assets/images/fingerprint.svg';
import instlogo from './assets/images/instlogo.svg';

function App() {

  let [isActive1, setIsActive1] = useState(false);
  let [isActive2, setIsActive2] = useState(false);
  let [isActive3, setIsActive3] = useState(false);

  return (
    <div className="App">
      <div className="WelcomeBlock">
        <div className="WelcomeBlock_Logo">
          <img src={mainlogo}/>
        </div>
        <div className="WelcomeBlock_Text">
          привет. <br/>
          Гиндис - <br/>
          креативное <br/>
          агенство <br/>
        </div>
      </div>
      <div className="SecondBlock">
        <div className="SecondBlock_Crosses">
          <img src={secondblockClosses}/>
        </div>
        <div className="SecondBlock_Content">
        <div className="RedRectangle">
        </div>  
        <div className="MainImage">
          <img src={secondblockbg}/>
        </div>
        <div className="SecondBlockText">
          <img src={secondblockText}/>
        </div>
        </div>
      </div>
      <div className="Services">
        <div className="crosses1">
            <img src={crosses1}/>
          </div>
        <div className="crosses2">
            <img src={crosses2}/>
          </div>
        <div className="crosses3">
            <img src={crosses3}/>
          </div>
        <div className={isActive1 ? 'Creative Services_active' : 'Creative'}>
          <div className="Services_Header" onClick={()=>{setIsActive1(false)}}>CREATIVE</div>
          { isActive1 ? <div className="Services_Content">таргетированная реклама контекстная реклама создание плашек анимации для рекламы</div>
          : <div className="ClickBlock" onClick={()=>{setIsActive1(true)}}>
            <img src={DownArrow}/>
          </div>}
        </div>
        <div className={isActive2 ? 'Performance Services_active' : 'Performance'}>
          <div className="Services_Header" onClick={()=>{setIsActive2(false)}}>PERFORMANCE</div>
          { isActive2 ? <div className="Services_Content">таргетированная реклама контекстная реклама создание плашек анимации для рекламы</div>
          : <div className="ClickBlock" onClick={()=>{setIsActive2(true)}}>
            <img src={DownArrow}/>
          </div>}
        </div>
        <div className={isActive3 ? 'Producing Services_active' : 'Producing'}>
          <div className="Services_Header" onClick={()=>{setIsActive3(false)}}>PRODUCING</div>
          { isActive3 ? <div className="Services_Content">таргетированная реклама контекстная реклама создание плашек анимации для рекламы</div>
          : <div className="ClickBlock" onClick={()=>{setIsActive3(true)}}>
            <img src={DownArrow}/>
          </div>}
        </div>
      </div>
      <div className="About">
      <div className="BigLogoSection">
        <img src={biglogosection}/>
        <div className="WeCan">
          <div className="WeCan_Block WeCan_Block-1">
            упс №2
            <img src={redlogo}/>
          </div>
          <div className="WeCan_Logo">
            <img src={wecan}/>
            <div className="WeCan_Block WeCan_Block-red">
              <img src={whitelogo}/>
              направление №1
              </div>
          </div>
          <div className="WeCan_Block WeCan_Block-3">
            направление №7
            <img src={redlogo}/>
          </div>
        </div>
        <div className="AboutCompany">
          <div className="AboutCompany_HeaderSupport">
            <div className="AboutCompany_Header AboutCompany_Header-1">
              ии
            </div>
            <div className="AboutCompany_Header AboutCompany_Header-2">
              о компании о компании о компании о компании 
            </div>
          </div>
          <div className="AboutCompany_Content">
            <div className="Photo">
              <img src={Photo}/>
            </div>
            <div className="TextSupport">
            <div className="Text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium ipsum in felis hendrerit, eu facilisis dolor molestie. Nulla varius tellus a auctor molestie. Maecenas vitae justo libero. Donec lobortis tincidunt nisl at finibus. Proin ex nisl, elementum id eleifend quis, bibendum ac mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum feugiat condimentum. 
            Pellentesque eu tortor lacinia, gravida augue sed, scelerisque nibh.Ut gravida sit amet orci vitae elementum. Quisque et sapien a ante suscipit consequat quis vel ligula.</div>
            <div className="Text">
            <img src={fingerprint} className="fingerprint"/>
             Vestibulum pellentesque vulputate massa. Aliquam et elit et sem scelerisque finibus. Pellentesque at vestibulum massa. Ut eu vulputate arcu, quis ultrices libero. Ut dapibus tellus a molestie feugiat. Sed consequat non metus sit amet pellentesque. Donec ut tincidunt velit, non luctus lacus. Duis rhoncus ante vestibulum libero posuere, vitae sodales sem condimentum. Aliquam bibendum lorem nec imperdiet tincidunt. Donec vel egestas massa, at ultrices ante.
            </div>
            <div className="Contacts">
              <div className="Contact">
                <img src={instlogo}/>
              </div>
              <div className="Contact">
                <img src={instlogo}/>
              </div>
              <div className="Contact">
                <img src={instlogo}/>
              </div>
              <div className="Contact">
                <img src={instlogo}/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
