import {images} from '@assets/images';
import {Box} from '@shared/ui/components';
import React from 'react';
import {Image} from 'react-native';

const HeaderFilmDetails = () => {
  return (
    <Box>
      <Box height={211}>
        <Image
          resizeMode="stretch"
          source={images.coverFilmToRated}
          style={{
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
      </Box>
    </Box>
  );
};

export default HeaderFilmDetails;
