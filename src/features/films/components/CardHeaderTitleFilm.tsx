import {images} from '@assets/images';
import {Box, Card, Icon, Text} from '@shared/ui/components';
import React from 'react';
import {Image} from 'react-native';
import {FilmDetail} from '../entities/filmDetail';
import {palette} from '@shared/theme';

type Props = {
  film: FilmDetail;
};

const CardHeaderTitleFilm: React.FC<Props> = ({film}) => {
  return (
    <Card variant="headerFilmDetail">
      <Box flexDirection="row" justifyContent="space-around">
        <Box width={95} height={120} zIndex="z100" bottom="70%">
          <Image
            resizeMode="stretch"
            source={images.coverFilmsPlayingNow}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 16,
            }}
          />
        </Box>
        <Box px="s">
          <Text variant="titleFilmDetail">{film.original_title}</Text>
        </Box>
      </Box>

      <Box
        bottom="30%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly">
        <Box
          px="s"
          flexDirection="row"
          borderRightColor="primary"
          borderRightWidth={1}>
          <Icon
            type="Ionicons"
            name="calendar-clear-outline"
            color={palette.primary[100]}
            size={16}
          />
          <Text variant="labelInfoFilms">{film.release_date}</Text>
        </Box>

        <Box
          flexDirection="row"
          borderRightColor="primary"
          borderRightWidth={1}
          pr="s">
          <Icon
            type="Ionicons"
            name="time-outline"
            color={palette.primary[100]}
            size={16}
          />
          <Text variant="labelInfoFilms">{film.runtime} Minutes</Text>
        </Box>

        <Box flexDirection="row" alignItems="center">
          <Icon
            type="MaterialCommunityIcons"
            name="ticket-outline"
            color={palette.primary[100]}
            size={16}
          />
          <Text variant="labelInfoFilms">{film.genres[0]}</Text>
        </Box>
      </Box>
    </Card>
  );
};

export default CardHeaderTitleFilm;
