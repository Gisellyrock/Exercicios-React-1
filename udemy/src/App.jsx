// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Login from './assets/login.jpg';

// Styles / CSS
import './App.css';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/pic.jpeg" alt="Paisagem" />
      </div>

      {/* Imagem em asset */}
      <div>
        <img src={Login} alt="Paisagem" />
      </div>

      {/* <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge /> */}
    </div>
  );
}

export default App;
