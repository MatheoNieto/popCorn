import React from 'react';
import BaseSpinner from '@shared/ui/components/BaseSpinner';
import {PublicNavigator} from '../public';
import {useGetGuestAuthentication} from '@features/auth/hook/useGetGuestAuthentication';
import {useAppSelector} from '@shared/hooks/useStore';
import {isAuthenticatedSelector} from '@features/auth/store/selector';
import {Box, Text} from '@shared/ui/components';

export const RootNavigator = () => {
  useGetGuestAuthentication();
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  return (
    <React.Suspense fallback={<BaseSpinner />}>
      {/* {isAuthenticated ? (
        <PublicNavigator />
      ) : (
        <Box mt="4xl" px="m" alignItems="center">
          <Text textAlign="center" fontSize={24}>
            Error getting session id{" "}
          </Text>
        </Box>
      )} */}
      <PublicNavigator />
    </React.Suspense>
  );
};
