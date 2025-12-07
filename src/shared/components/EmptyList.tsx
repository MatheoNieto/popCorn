import {Box, Text} from '@shared/ui/components';
import {Image} from 'react-native';
import React from 'react';
import {icons} from '@assets/icons';

type Props = {
  title: string;
  message?: string;
};
const EmptyList: React.FC<Props> = ({message, title}) => {
  return (
    <Box
      mt="4xl"
      flex={1}
      height="100%"
      alignItems="center"
      justifyContent="center">
      <Image resizeMode="cover" source={icons.search} width={76} height={76} />
      <Box width={300}>
        <Text variant="titleEmptyList">{title}</Text>
        <Text variant="messageEmptyList">{message}</Text>
      </Box>
    </Box>
  );
};

export default EmptyList;
