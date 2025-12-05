import {Box, Card, Text} from '@shared/ui/components';
import React from 'react';
import {Image} from 'react-native';
import {Film} from '../entities/film';
import {images} from '@assets/images';

type Props = {
  film: Film;
  position: number;
};

const CardTopRatedFilm: React.FC<Props> = ({film, position}) => {
  return (
    <Card variant="topRated">
      <Box>
        <Image
          resizeMode="cover"
          source={images.coverFilms}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 16,
          }}
        />
      </Box>
      <Text variant="numberTopRated">{position}</Text>
    </Card>
  );
};

export default CardTopRatedFilm;
