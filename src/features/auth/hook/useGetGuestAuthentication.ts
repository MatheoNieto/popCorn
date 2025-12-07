import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getGuestAuthenticationService} from '../services/getGuestAuthentication';
import {useAppDispatch} from '@shared/hooks/useStore';
import {authActions} from '../store';

export const useGetGuestAuthentication = () => {
  const dispatch = useAppDispatch();

  const dataHook = useQuery({
    queryKey: ['GETTING_SESSION_ID_GUEST'],
    refetchInterval: 10 * 60 * 1000,
    refetchOnMount: true,
    queryFn: getGuestAuthenticationService,
    retry: 2,
    retryDelay: 5000,
  });

  React.useEffect(() => {
    if (!dataHook) return;
    dispatch(authActions.signInAsGuest({dataSession: dataHook.data}));
  }, [dataHook.data]);

  return dataHook;
};
