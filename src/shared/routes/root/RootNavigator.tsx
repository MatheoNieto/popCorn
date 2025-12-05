import React from 'react';
import BaseSpinner from '@shared/ui/components/BaseSpinner';
import {PublicNavigator} from '../public';
import {useGetGuestAuthentication} from '@features/auth/hook/useGetGuestAuthentication';
import {useAppDispatch, useAppSelector} from '@shared/hooks/useStore';
import {authActions} from '@features/auth/store';
import {isAuthenticatedSelector} from '@features/auth/store/selector';
import {Box, Text} from '@shared/ui/components';

export const RootNavigator = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  const {data: dataSession} = useGetGuestAuthentication();

  React.useEffect(() => {
    if (!dataSession) return;
    dispatch(authActions.signInAsGuest({dataSession}));
  }, [dataSession]);

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
