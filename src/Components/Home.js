import React from 'react';
import logo from '../image/logoNCC.png';
import cssIcon from '../image/css-icon.png';
import htmlIcon from '../image/html-icon.png';
import urlIcon from '../image/url-icon.png';
import '../App.css'



const Home = () => {
  return (
<div className="Content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="Background" style={{ backgroundColor: 'white', flex: 1, width: '100%' }} />
      <img className="Logoncc1" src={logo} alt="Logo" style={{ marginTop: 20 }} />
      <div className="Group" >
        <div className="Header">Lorem ipsum dolor sit asmet?</div>
        <div className="Text" style={{ color: 'black', fontSize: 14, fontWeight: '400', textIndent: '20px', marginLeft: 100, marginRight: 100 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</div>
      </div>
      <div className="Container" style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: 20, width: '83%', marginBottom: 60 }}>
        <div className="Group2" >
          <div className="Header">
            Lorem ipsum dolor sit amet
            </div>
            <div className="TextAndImage">
              <img className="Icon1" src={cssIcon} alt="CSS Icon" />
              <div className="Text1" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at</div>
              </div>
            <div className="Text2">
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
            </div>
          </div>
          <div className="Group2">
          <div className="Header" >Lorem ipsum dolor sit amet</div>
            <div className="TextAndImage" >
              <img className="Icon1" src={htmlIcon} alt="HTML Icon" />
              <div className="Text1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </div>
            </div>
            <div className="Text2" >ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</div>
          </div>
          <div className="Group2" >
            <div className="Header" >Lorem ipsum dolor sit amet</div>
              <div className="TextAndImage" >
                <img className="Icon" src={urlIcon} alt="URL Icon" />
                <div className="Text1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at 
                </div>
              </div>
              <div className="Text2">
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                </div>
          </div>
      </div>
      <div className="Footer">
              <div className="Rectangle5" style={{  }}>
                <div className="Top" style={{ height: 0, border: '1px #DEDEDE solid', bottom: 0, width: '100%' }}></div>
              </div>
              <div className="Copyright2021" style={{marginLeft: 120  , marginTop: 30, color: '#3E3E3E', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>
                Copyright © 2021
              </div>
            </div>
      </div>
  )
};

export default Home;