//import logo from './logo.svg';
import './App.css';

//function App() {
//  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
 // );
//}
//export default App;
const app = () => {
  const [search, setSearch] = useState ('');
  return (
    <form onSublimt= {ev =>{ev.preventDefault();
     setSearch (ev.target.search.value);
    }}
    > 

      <input type='text' name='search' autoComplete='off'></input>
      <input type='submit'>Buscar</input>
      <P>Resultado para: {search} </P>
    </form>
  );
};