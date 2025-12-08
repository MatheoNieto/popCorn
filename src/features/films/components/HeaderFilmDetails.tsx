import {images} from '@assets/images';
import {BaseTouchable, Box} from '@shared/ui/components';
import React from 'react';
import {Image} from 'react-native';
import {useVideoPlayer, VideoView} from 'expo-video';

const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const HeaderFilmDetails = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const player = useVideoPlayer(videoSource, player => {});

  return (
    <Box>
      {!playVideo ? (
        <Box as={BaseTouchable} onPress={() => setPlayVideo(true)} height={211}>
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
      ) : (
        <Box height={211}>
          <VideoView
            style={{width: '100%', height: '100%'}}
            player={player}
            fullscreenOptions={{
              enable: true,
              orientation: 'landscape',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default HeaderFilmDetails;
