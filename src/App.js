import './App.css';
import Calcular from './components/Testecomponents'
import Calc3 from './Component3'
function App() {

  let nome = 'francisco targino chagas junior'
  let idade = 52

  return (
    <div className="App">
      <p> nome:{nome}</p>
      <p>idade: {idade}</p>
     <Calcular/>
     <Calc3/>
     
    </div>
  );
}

export default App;
