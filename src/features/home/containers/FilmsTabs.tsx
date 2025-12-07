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
          key="now-playing-1"
          title="Now playing"
          component={ListNowPlayingContainer}
        />
        <TabViewContainer.Item
          key="upcoming-2"
          title="Upcoming"
          component={ListUpComingContainer}
        />
        <TabViewContainer.Item
          key="top-rated-3"
          title="Top rated"
          component={ListTopRatedContainer}
        />
      </TabViewContainer>
    </Box>
  );
};
export default FilmsTabsContainer;
