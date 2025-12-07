import {Box} from '@shared/ui/components';
import React from 'react';
import BaseSpinner from '@shared/ui/components/BaseSpinner';
import {FlatList} from 'react-native';
import {Film} from '@shared/entities/film';
import {CardFilm} from '../components';
import {images} from '@assets/images';
import {useGetFilmsTopsRated} from '../hooks/useGetTopRatedFilms';

const ListTopRatedContainer = () => {
  const {films, isLoading, isFetchingNextPage, hasMore, onLoadNextPage} =
    useGetFilmsTopsRated({});

  const renderItems = React.useCallback(
    ({item}: {item: Film}) => {
      return <CardFilm film={item} image={images.coverFilmToRated} />;
    },
    [films],
  );

  if (isLoading) {
    return (
      <Box py="m">
        <BaseSpinner />
      </Box>
    );
  }

  return (
    <Box>
      <FlatList
        contentContainerStyle={{
          paddingVertical: 10,
          paddingLeft: 5,
        }}
        numColumns={3}
        data={films}
        keyExtractor={item => `top-rated-card-film${item.id}`}
        renderItem={renderItems}
        onEndReached={() => hasMore && onLoadNextPage()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          isFetchingNextPage ? <BaseSpinner /> : null
        }
      />
    </Box>
  );
};
export default ListTopRatedContainer;
