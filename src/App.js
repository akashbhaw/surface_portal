
import './App.css';
import Container from './component/container';
import EnableButton from './component/enablebutton';
import Portals from './component/portals';
import { useState } from 'react';

function App() {
  const [enable,setenable]=useState(false)

  const handleEnable=()=>{
    setenable(prev=>!prev)
  }
  return (
    <div  className="App">
      <EnableButton  enableloop={handleEnable} enable={enable}/>
    <Container>
      <Portals enable={enable}/>
      <Portals enable={enable}/>
      <Portals enable={enable}/>
      <Portals enable={enable}/>
    </Container>
    </div>
  );
}

export default App;
