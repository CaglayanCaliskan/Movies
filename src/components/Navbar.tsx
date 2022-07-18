import {useMoviesContext} from '../context/MoviesContext';
import '../styles/Navbar.scss';

const Navbar = () => {
  const {search, setSearch} = useMoviesContext();
  return (
    <nav className='navbar'>
      <input
        placeholder='Type for searcing...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
