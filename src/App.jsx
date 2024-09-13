import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

import SigmaBale from './assets/SIG.jpg'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';

function App() {
  const n = 15
  const classDiferente = true

  return (
    <div className='App'>
      {/* <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/> */}

        <ComponentORemake/>

      <h1>olha lá</h1>
      <OutroComponent />

      <p style={{ color: "blue", padding: "25px", backgroundColor: "red", fontSize: "40px" }}>Paragrafodo App.jsx</p>

      <h3 style={n > 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"clack"})}>
      primeiro estilo</h3>

      <h2 className={classDiferente ? "red-title" : "normal-title"}>classe diferente1</h2>
      <h2 className={classDiferente ? "red-title" : "normal-title"}>classe diferente2</h2>

      <img src='./CR7 SIGMA.jpg' width={500} height={500}></img>
      <img src={SigmaBale} alt='sigma' width={500} height={400}></img>
    </div>
  );
}

export default App;
