import { Search } from "@shared/components";
import { Box } from "@shared/ui/components";
import React from "react";
import { useGetTopRatedFilms } from "../hooks/useGetTopRatedFilms";
import BaseSpinner from "@shared/ui/components/BaseSpinner";
import { FlatList } from "react-native";
import { Film } from "../entities/film";
import { CardTopRatedFilm } from "../components";

const ListTopFilmsContainer = () => {
  const { data: listTopRated = [], isLoading } = useGetTopRatedFilms({});
  const [valueSearch, setValueSearch] = React.useState("");

  console.log("==>listTopRated", JSON.stringify(listTopRated));

  const renderItems = React.useCallback(
    ({ item }: { item: Film }) => {
      return <CardTopRatedFilm film={item} />;
    },
    [listTopRated],
  );

  return (
    <Box>
      <Search value={valueSearch} onChange={setValueSearch} />
      {isLoading ? (
        <Box p="m">
          <BaseSpinner />
        </Box>
      ) : (
        <FlatList
          data={listTopRated}
          keyExtractor={(item) => `top-rated-card-film${item.id}`}
          renderItem={renderItems}
        />
      )}
    </Box>
  );
};

export default ListTopFilmsContainer;
