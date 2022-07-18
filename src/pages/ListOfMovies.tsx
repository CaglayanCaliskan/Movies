import Card from '../components/Card';
import {useMoviesContext} from '../context/MoviesContext';
import '../styles/ListOfMovies.scss';

const ListOfMovies = () => {
  const {rightList, leftList, search} = useMoviesContext();

  return (
    <div className='list-of-movies'>
      <div id='left-movie-container' style={{width: '40%'}}>
        <h2>Movies: {leftList.length}</h2>
        {leftList.map((movie) => {
          if (movie.title.toLowerCase().includes(search.toLowerCase())) {
            return <Card key={movie.id} {...movie} button={true} />;
          } else {
            return null;
          }
        })}
      </div>
      <div id='right-movie-container' style={{width: '40%'}}>
        <h2>Favorite: {rightList.length}</h2>
        {rightList &&
          rightList.map((movie) => {
            if (movie.title.toLowerCase().includes(search.toLowerCase())) {
              return <Card key={movie.id} {...movie} button={false} />;
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default ListOfMovies;
