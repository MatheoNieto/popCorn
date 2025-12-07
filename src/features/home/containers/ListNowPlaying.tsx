import {Box} from '@shared/ui/components';
import React from 'react';
import {useGetNowPlaying} from '../hooks/useGetNowPlaying';
import BaseSpinner from '@shared/ui/components/BaseSpinner';
import {FlatList} from 'react-native';
import {CardFilm} from '../components';
import {images} from '@assets/images';
import {Film} from '@shared/entities/film';

const ListNowPlayingContainer = () => {
  const {films, isLoading, isFetchingNextPage, hasMore, onLoadNextPage} =
    useGetNowPlaying();

  const renderItems = React.useCallback(
    ({item}: {item: Film}) => {
      return <CardFilm film={item} image={images.coverFilmsPlayingNow} />;
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
        keyExtractor={item => `now-playing-card-film${item.id}`}
        renderItem={renderItems}
        onEndReached={() => hasMore && onLoadNextPage()}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Box></Box>}
        ListFooterComponent={() =>
          isFetchingNextPage ? <BaseSpinner /> : null
        }
      />
    </Box>
  );
};
export default ListNowPlayingContainer;
