import {TabRoute} from '@shared/hooks/useTabs';
import {Box} from '@shared/ui/components';
import React from 'react';

export type Props = TabRoute;

const TabViewItem: React.FC<Props> = ({key, component}) => {
  return <Box backgroundColor="iconActiveBottom" height={50}></Box>;
};

export default TabViewItem;
