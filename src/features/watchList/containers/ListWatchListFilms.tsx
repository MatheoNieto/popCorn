import {EmptyList} from '@shared/components';
import {Box} from '@shared/ui/components';
import React from 'react';
import BaseSpinner from '@shared/ui/components/BaseSpinner';
import {FlatList} from 'react-native';
import {CardFilm} from '@features/home/components';
import {Film} from '@shared/entities/film';
import {images} from '@assets/images';
import {useGetWatchList} from '../hooks/useGetWatchList';
import {useAppSelector} from '@shared/hooks/useStore';
import {getSessionId} from '@features/auth/store/selector';

const ListWatchListFilmsContainer = () => {
  const sessionId = useAppSelector(getSessionId);
  const {films, hasMore, isFetchingNextPage, onLoadNextPage} = useGetWatchList({
    session_id: sessionId,
  });

  const renderItems = React.useCallback(
    ({item}: {item: Film}) => {
      return <CardFilm film={item} image={images.coverFilms} />;
    },
    [films],
  );

  return (
    <Box>
      <FlatList
        style={{flexGrow: 1}}
        contentContainerStyle={{
          paddingVertical: 10,
          paddingLeft: 5,
          paddingBottom: 130,
        }}
        data={films}
        keyExtractor={item => `card-searching-film${item.id}`}
        renderItem={renderItems}
        numColumns={3}
        onEndReached={() => hasMore && onLoadNextPage()}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <EmptyList
            title="we are sorry, we can not find the movie :("
            message="Find your movie by Type title, categories, years, etc"
          />
        }
        ListFooterComponent={() =>
          isFetchingNextPage ? <BaseSpinner /> : null
        }
      />
    </Box>
  );
};

export default ListWatchListFilmsContainer;
