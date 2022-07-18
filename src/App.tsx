import './App.scss';
import Navbar from './components/Navbar';
import {MoviesProvider} from './context/MoviesContext';
import ListOfMovies from './pages/ListOfMovies';

function App() {
  return (
    <div className='App'>
      <MoviesProvider>
        <Navbar />
        <ListOfMovies />
      </MoviesProvider>
    </div>
  );
}

export default App;
