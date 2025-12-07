import {Box, Card} from '@shared/ui/components';
import React from 'react';
import {Image} from 'react-native';
import {Film} from '../entities/film';

type Props = {
  film: Film;
  image?: any;
};

const CardFilm: React.FC<Props> = ({image}) => {
  return (
    <Card variant="film">
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
