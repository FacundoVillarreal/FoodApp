import './App.css';
import { Login } from './components/Login/Login';
import { ListOfItem } from './components/ListOfItem/ListOfItem';
import { SearchForm } from './components/SearchForm/SearchForm';
import './App.css'
import { Header } from './components/Header/Header';
function App() {
  return (
    <div className='App-content'>
      <Header/>
      <SearchForm />
    </div>
  );
}

export default App;
