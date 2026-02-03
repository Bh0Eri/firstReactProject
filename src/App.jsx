import logo from './logo.svg';
import './App.css';

function App() {

  // var name = "lucas"
  // let lastName = "Correa"
  // const middle_name = "Espirito santo"  

  // console.log(fatia_texto);
  let full_mane = "Maria clara de jose"
  let array_string = full_mane.split(" ")
  let name = array_string[0]

  console.log(name);
  console.log(array_string.length);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
         {`Ola, ${name} do ${middle_name} ${lastName}`}
        </p>
      <p>{}</p> */}
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
