import React from 'react';
// import Button, {ButtonType,ButtonSize} from './components/Button/button'
// import Alert from './components/Alert/alert'
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/menuItem'
// import SubMenu from './components/Menu/subMenu'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs
          defaultIndex={0}
          onSelect={function noRefCheck(){}}
          type="card"
        >
          <TabItem label="选项卡一">
            this is content one
          </TabItem>
          <TabItem label="选项卡二">
            this is content two
          </TabItem>
          <TabItem label="用户管理">
            this is content three
          </TabItem>
        </Tabs> 
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
