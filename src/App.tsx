import React from 'react';
// import Button, {ButtonType,ButtonSize} from './components/Button/button'
import Alert from './components/Alert/alert'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div
        style={{
          padding: '20px 40px',
          width: '500px'
        }}
      >
        <h3>
          组件演示
        </h3>
        <Alert
          closable
          title="this is Success"
          type="success"
        />
        <Alert
          closable
          title="this is Danger!"
          type="danger"
        />
        <Alert
          closable={false}
          title="this is Warning!"
          type="warning"
        />
        <Alert
          closable
          description="this is a long description"
          onClose={function noRefCheck(){alert('关闭')}}
          title="提示标题欧亲"
          type="default"
        />        
      </div>
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
