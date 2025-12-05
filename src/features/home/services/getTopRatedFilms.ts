import { endPoints } from "@shared/constants/endpoints";
import consumerApi from "@shared/services/api";
import { FilterTopRated } from "../entities/topRated";
import { MoviesResponseApiDTO } from "../data/dto/response/topRatedFilmsResponseDTO";
import { Film } from "../entities/film";
import { TopRatedMapper } from "../data/mappers/topRatedMapper";

export const getTopRatedFilms = async (
  filters: FilterTopRated,
): Promise<Film[]> => {
  try {
    const response = await consumerApi.get<MoviesResponseApiDTO>(
      endPoints.films.topRated,
      {
        params: filters,
      },
    );

    const dataFilmsMapped = TopRatedMapper.responseToEntity(
      response.data.results,
    );
    return Promise.resolve(dataFilmsMapped);
  } catch (err) {
    return Promise.reject(err);
  }
};
