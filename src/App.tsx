import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/menuItem'  
// import SubMenu from './components/Menu/subMenu'
// import Transition from './components/Transition/transition'
// import Button from './components/Button/button'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'
library.add(fas)


const App: React.FC = () => {
  // const [ show, setShow ] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Tabs defaultIndex={0} onSelect={(index) => {alert(index)}}>
          <TabItem label='card1'>this is card one</TabItem>
          <TabItem label='card2'>this is content two</TabItem>
          <TabItem label='disabled' disabled>this is content three</TabItem>
        </Tabs>
      </header>
    </div>
  );
}

export default App;