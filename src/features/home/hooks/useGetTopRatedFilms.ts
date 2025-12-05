import { useQuery } from "@tanstack/react-query";
import { FilterTopRated } from "../entities/topRated";
import { getTopRatedFilms } from "../services/getTopRatedFilms";

export const useGetTopRatedFilms = (filter: FilterTopRated) => {
  return useQuery({
    queryKey: ["GETTING_TOP_RATES_FILMS", filter],
    queryFn: () => getTopRatedFilms(filter),
  });
};
