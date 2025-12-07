import {StackNavigationProp} from '@react-navigation/stack';
import {FilmRoutes} from './routes';
import {Film} from '@shared/entities/film';

export type FilmsParamsList = {
  [FilmRoutes.FILM_DETAILS]: {
    filmId: Film['id'];
  };
};

export type FilmsStackProps = StackNavigationProp<FilmsParamsList>;
