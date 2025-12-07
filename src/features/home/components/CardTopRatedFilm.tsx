import {BaseTouchable, Box, Card, Text} from '@shared/ui/components';
import React from 'react';
import {Image} from 'react-native';
import {Film} from '@shared/entities/film';
import {images} from '@assets/images';
import {StackPublicDefinitions} from '@shared/routes/public/types';
import {FilmRoutes} from '@features/films';
import {useNavigation} from '@react-navigation/native';

type Props = {
  film: Film;
  position: number;
};

const CardTopRatedFilm: React.FC<Props> = ({film, position}) => {
  const navigation = useNavigation();
  return (
    <Card
      variant="topRated"
      as={BaseTouchable}
      onPress={() =>
        navigation.navigate(StackPublicDefinitions.PUBLIC_STACK, {
          screen: FilmRoutes.FILM_DETAILS,
          params: {
            filmId: film.id,
          },
        })
      }>
      <Box>
        <Image
          resizeMode="cover"
          source={images.coverFilms}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
        />
      </Box>
      <Text variant="numberTopRated">{position}</Text>
    </Card>
  );
};

export default CardTopRatedFilm;
