import {MovieType} from '../types';
import {differenceInDays, fromUnixTime} from 'date-fns';
import {useMoviesContext} from '../context/MoviesContext';
import '../styles/Card.scss';
const Card = ({
  button,
  id,
  genres,
  overview,
  poster,
  release_date,
  title,
}: MovieType) => {
  const {onAddClick, onRemoveClick} = useMoviesContext();
  return (
    <div className='movie'>
      <div id='movie-image'>{poster && <img src={poster} alt={title} />}</div>
      <div>
        <div id='movie-title'>Name: {title}</div>
        <div id='movie-date'>
          Release date:{' '}
          {differenceInDays(new Date(), fromUnixTime(release_date))} days ago
        </div>
        <div className='movie-genres'>
          Genres:
          {genres.map((g, index) => {
            return <span key={index}>{g} </span>;
          })}
        </div>
        <div>
          Overview: <p style={{color: '#333'}}>{overview}</p>{' '}
        </div>
      </div>
      <button
        id='add-button'
        onClick={() => (button ? onAddClick(id) : onRemoveClick(id))}
        style={{padding: '1rem'}}
      >
        {button ? 'Add' : 'Remove'}
      </button>
    </div>
  );
};

export default Card;
