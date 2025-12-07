import {Box, Card, Text} from '@shared/ui/components';
import React from 'react';
import {Image} from 'react-native';
import {Film} from '../entities/film';
import {images} from '@assets/images';

type Props = {
  film: Film;
};

const CardFilm: React.FC<Props> = ({film}) => {
  return (
    <Card variant="film">
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
    </Card>
  );
};

export default CardFilm;
