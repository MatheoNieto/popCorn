import * as React from 'react';
import {useState, useMemo} from 'react';
import {SceneMap} from 'react-native-tab-view';

export type TabRoute = {
  key: string;
  title: string;
  component: React.ComponentType<any>;
};

export const useTabs = (initialRoutes: TabRoute[]) => {
  const [index, setIndex] = useState(0);

  const {routes, sceneMap} = useMemo(() => {
    const routes = initialRoutes.map(route => ({
      key: route.key,
      title: route.title,
    }));

    const sceneMap = initialRoutes.reduce<
      Record<string, React.ComponentType<any>>
    >((acc, route) => {
      acc[route.key] = route.component;
      return acc;
    }, {});

    return {routes, sceneMap};
  }, [initialRoutes]);

  const renderScene = SceneMap(sceneMap);

  return {
    index,
    routes,
    setIndex,
    renderScene,
  };
};
