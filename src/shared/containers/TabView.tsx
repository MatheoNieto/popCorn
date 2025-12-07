import {TabBar, TabItemProps, TabViewItem} from '@shared/components';
import {TabRoute, useTabs} from '@shared/hooks/useTabs';
import {Box} from '@shared/ui/components';
import React from 'react';
import {TabView} from 'react-native-tab-view';

type TabViewContainerProps = {
  children: React.ReactNode;
};

const TabViewContainer: React.FC<TabViewContainerProps> & {
  Item: React.FC<TabItemProps>;
} = ({children}) => {
  const initialRoutes = React.useMemo(() => {
    const localRoutes: TabRoute[] = [];
    React.Children.forEach(children, child => {
      if (React.isValidElement(child) && child.type === TabViewItem) {
        const childProps = child.props as TabItemProps;
        localRoutes.push({
          key: child.key || `${Math.random()}`,
          title: childProps.title,
          component: childProps.component,
        });
      }
    });
    return localRoutes;
  }, [children]);
  const {index, routes, setIndex, renderScene} = useTabs(initialRoutes);

  return (
    <Box backgroundColor="primary900" height={400}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={props => <TabBar {...props} onIndexChange={setIndex} />}
        onIndexChange={setIndex}
      />
    </Box>
  );
};

TabViewContainer.Item = TabViewItem;

export default TabViewContainer;
