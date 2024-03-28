import './App.css';
import { About, Footer, Music, Projects, Title } from './components';

function App() {
  return (
    <div className="app">
      <Title/>
      <Projects/>
      <About/>
      <Music/>
      <Footer/>
    </div>
  );
}

export default App;
