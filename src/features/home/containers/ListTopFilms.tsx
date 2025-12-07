import {Search} from '@shared/components';
import {Box} from '@shared/ui/components';
import React from 'react';
import {useGetTopRatedFilms} from '../hooks/useGetTopRatedFilms';
import BaseSpinner from '@shared/ui/components/BaseSpinner';
import {FlatList} from 'react-native';
import {Film} from '../entities/film';
import {CardTopRatedFilm} from '../components';

const ListTopFilmsContainer = () => {
  const {data: listTopRated, isLoading} = useGetTopRatedFilms({});
  const [valueSearch, setValueSearch] = React.useState('');

  const renderItems = React.useCallback(
    ({item, index}: {item: Film; index: number}) => {
      return <CardTopRatedFilm film={item} position={index + 1} />;
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
          contentContainerStyle={{
            paddingVertical: 10,
            paddingLeft: 5,
            height: '40%',
          }}
          horizontal
          data={listTopRated ?? []}
          keyExtractor={item => `top-rated-card-film${item.id}`}
          renderItem={renderItems}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Box>
  );
};

export default ListTopFilmsContainer;
