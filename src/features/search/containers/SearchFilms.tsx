import {EmptyList, Search} from '@shared/components';
import {Box} from '@shared/ui/components';
import React from 'react';
import BaseSpinner from '@shared/ui/components/BaseSpinner';
import {FlatList} from 'react-native';
import {CardFilm} from '@features/home/components';
import {Film} from '@shared/entities/film';
import {images} from '@assets/images';
import {useGetSearchFilms} from '../hooks/useGetFilmsBySearch';

const SearchFilmsContainer = () => {
  const [valueSearch, setValueSearch] = React.useState('');
  const {
    films,
    isLoading,
    hasMore,
    isFetchingNextPage,
    onLoadNextPage,
    refetch,
  } = useGetSearchFilms({
    query: valueSearch,
  });

  React.useEffect(() => {
    if (valueSearch.length < 3) return;
    const delay = setTimeout(() => {
      refetch();
    }, 300);

    return () => {
      clearTimeout(delay);
    };
  }, [valueSearch]);

  const renderItems = React.useCallback(
    ({item}: {item: Film}) => {
      return <CardFilm film={item} image={images.coverFilms} />;
    },
    [films],
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
      )}
    </Box>
  );
};

export default SearchFilmsContainer;
