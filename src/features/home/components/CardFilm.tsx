import {FilmRoutes} from '@features/films';
import {useNavigation} from '@react-navigation/native';
import {Film} from '@shared/entities/film';
import {StackPublicDefinitions} from '@shared/routes/public/types';
import {BaseTouchable, Box, Card} from '@shared/ui/components';
import React from 'react';
import {Image} from 'react-native';

type Props = {
  film: Film;
  image?: any;
};

const CardFilm: React.FC<Props> = ({film, image}) => {
  const navigation = useNavigation();

  return (
    <Card
      variant="film"
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
          source={image}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
        />
      </Box>
    </Card>
  );
};

export default CardFilm;
