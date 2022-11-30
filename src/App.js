//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import SideMenu from './components/SideMenu';
//import IconSideBar from './components/IconSideBar';
import Menu from './components/Menu';



function App() {
  const [isMenuActive, activeMenu] = useState(false)

  return (
    <div>
       <Menu/>

      <div>
        lorem ipsum
      </div>
    </div>
  
  );
}
/* <div className="App">
      <header classname="App-header">
        <div>logo</div>
      <div className='icon'>
        <IconSideBar fill = "#fff" onMenuClick={() => activeMenu(!isMenuActive)}/>
      </div>
        <SideMenu isMenuActive={isMenuActive}
        onOverLayClick= {() => activeMenu(!isMenuActive)} />

      </header>
      
    </div>*/ 
export default App;
