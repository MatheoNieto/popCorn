import {Box} from '@shared/ui/components';
import React from 'react';
import {useGetNowPlaying} from '../hooks/useGetNowPlaying';
import BaseSpinner from '@shared/ui/components/BaseSpinner';
import {FlatList} from 'react-native';
import {Film} from '../entities/film';
import {CardFilm} from '../components';

const ListNowPlayingContainer = () => {
  const {films, isLoading, isFetchingNextPage, onLoadNextPage} =
    useGetNowPlaying();

  const renderItems = React.useCallback(
    ({item}: {item: Film}) => {
      return <CardFilm film={item} />;
    },
    [films],
  );

  if (isLoading) {
    return <BaseSpinner />;
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
        showsVerticalScrollIndicator={false}
        onEndReached={() => onLoadNextPage()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          isFetchingNextPage ? <BaseSpinner /> : null
        }
      />
    </Box>
  );
};
export default ListNowPlayingContainer;
