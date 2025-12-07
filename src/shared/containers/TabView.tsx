import {TabBar, TabItemProps, TabViewItem} from '@shared/components';
import {TabRoute, useTabs} from '@shared/hooks/useTabs';
import React from 'react';
import {TabView} from 'react-native-tab-view';

type Props = {
  children: React.ReactNode;
};

const TabViewContainer: React.FC<Props> & {
  Item: React.FC<TabItemProps>;
} = ({children}) => {
  const initialRoutes: TabRoute[] = React.useMemo(() => {
    const collectedRoutes: TabRoute[] = [];

    React.Children.forEach(children, child => {
      if (React.isValidElement(child) && child.type === TabViewItem) {
        const dataChild = child.props as TabItemProps;
        collectedRoutes.push({...dataChild});
      }
    });

    return collectedRoutes;
  }, [children]);

  const {index, routes, setIndex, renderScene} = useTabs(initialRoutes);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={props => <TabBar {...props} onIndexChange={setIndex} />}
      onIndexChange={setIndex}
    />
  );
};

TabViewContainer.Item = TabViewItem;

export default TabViewContainer;
