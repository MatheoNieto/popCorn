import {TabViewContainer} from '@shared/containers';
import {Box} from '@shared/ui/components';
import React from 'react';
import ListNowPlayingContainer from './ListNowPlaying';
import ListUpComingContainer from './ListUpComing';
import ListTopRatedContainer from './ListTopRated';

const FilmsTabsContainer = () => {
  return (
    <Box backgroundColor="white">
      <TabViewContainer>
        <TabViewContainer.Item
          key="now-playing"
          title="Now playing"
          component={ListNowPlayingContainer}
        />
        <TabViewContainer.Item
          key="upcoming"
          title="Upcoming"
          component={ListUpComingContainer}
        />
        <TabViewContainer.Item
          key="top-rated"
          title="Top rated"
          component={ListTopRatedContainer}
        />
      </TabViewContainer>
    </Box>
  );
};
export default FilmsTabsContainer;
