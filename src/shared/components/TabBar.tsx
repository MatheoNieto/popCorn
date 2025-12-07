import {BaseTouchable, Box} from '@shared/ui/components';
import React from 'react';
import {Animated} from 'react-native';
import {SceneRendererProps, NavigationState} from 'react-native-tab-view';

type Props = SceneRendererProps & {
  navigationState: NavigationState<{key: string; title: string}>;
  onIndexChange: (index: number) => void;
};

const TabBar: React.FC<Props> = props => {
  const inputRange = props.navigationState.routes.map((x, i) => i);

  return (
    <Box>
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex =>
            inputIndex === i ? 1 : 0.5,
          ),
        });

        return (
          <BaseTouchable
            key={`route.key-${Math.random()}`}
            onPress={() => props.onIndexChange(i)}>
            <Animated.Text style={{opacity, color: 'white'}}>
              {route.title}
            </Animated.Text>
          </BaseTouchable>
        );
      })}
    </Box>
  );
};

export default TabBar;
