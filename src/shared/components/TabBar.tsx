import {BaseTouchable, Box, Text} from '@shared/ui/components';
import React from 'react';
import {SceneRendererProps, NavigationState} from 'react-native-tab-view';

type Props = SceneRendererProps & {
  navigationState: NavigationState<{key: string; title: string}>;
  onIndexChange: (index: number) => void;
};

const TabBar: React.FC<Props> = ({
  navigationState,
  position,
  onIndexChange,
  ...props
}) => {
  const inputRange = navigationState.routes.map((x, i) => i);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      p="m"
      backgroundColor="primary900">
      {navigationState.routes.map((route, i) => {
        const selected = navigationState.index === i;
        return (
          <BaseTouchable
            py="s"
            key={`route.key-${Math.random()}`}
            onPress={() => onIndexChange(i)}
            borderBottomColor="primary"
            borderBottomWidth={selected ? 4 : 0}>
            <Text style={{color: 'white'}}>{route.title}</Text>
          </BaseTouchable>
        );
      })}
    </Box>
  );
};

export default TabBar;
