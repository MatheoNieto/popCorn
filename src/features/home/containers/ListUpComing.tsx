import {Box} from '@shared/ui/components';
import React from 'react';
import {useGetUpComing} from '../hooks/useGetUpComing';
import BaseSpinner from '@shared/ui/components/BaseSpinner';
import {FlatList} from 'react-native';
import {Film} from '../entities/film';
import {CardFilm} from '../components';

const ListUpComingContainer = () => {
  const {films, isLoading, isFetchingNextPage, onLoadNextPage} =
    useGetUpComing();

  const renderItems = React.useCallback(
    ({item}: {item: Film}) => {
      return <CardFilm film={item} />;
    },
    [films],
  );

  if (isLoading) {
    return (
      <Box p="m">
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
export default ListUpComingContainer;
