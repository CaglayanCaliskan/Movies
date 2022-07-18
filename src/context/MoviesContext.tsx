import {createContext, ReactNode, useContext, useState} from 'react';
import {movies} from '../data/movies';
import {MovieType} from '../types';

type MoviesProviderProps = {
  children: ReactNode;
};

type MoviesContextItems = {
  leftList: MovieType[];
  rightList: MovieType[];
  setLeftList: React.Dispatch<React.SetStateAction<MovieType[]>>;
  setRightList: React.Dispatch<React.SetStateAction<MovieType[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onAddClick: (id: string) => void;
  onRemoveClick: (id: string) => void;
};

const MoviesContext = createContext({} as MoviesContextItems);

export function useMoviesContext() {
  return useContext(MoviesContext);
}

export function MoviesProvider({children}: MoviesProviderProps) {
  const [leftList, setLeftList] = useState<MovieType[]>(movies);
  const [rightList, setRightList] = useState<MovieType[]>([]);
  const [search, setSearch] = useState('');

  const onAddClick = (id: string) => {
    const selectedItem = leftList.find((item?) => item?.id === id);
    setLeftList(leftList.filter((item) => item.id !== id));
    setRightList([...rightList, selectedItem as MovieType]);
  };

  const onRemoveClick = (id: string) => {
    const selectedItem = rightList.find((item?) => item?.id === id);
    setRightList(rightList.filter((item) => item.id !== id));
    setLeftList([selectedItem as MovieType, ...leftList]);
  };

  return (
    <MoviesContext.Provider
      value={{
        leftList,
        rightList,
        search,
        setLeftList,
        setRightList,
        setSearch,
        onAddClick,
        onRemoveClick,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
