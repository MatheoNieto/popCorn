import { getDataSessionSelector } from "@features/auth/store/selector";
import { useAppSelector } from "@shared/hooks/useStore";
import { AxiosError, AxiosResponse } from "axios";
import React from "react";
import consumerApi from ".";
import useEventCallback from "@shared/hooks/useEvenCallback";
import { Alert } from "react-native";

function useHttpInterceptor() {
  const authorizationToken = useAppSelector(getDataSessionSelector);

  React.useEffect(() => {
    const consumerInterceptorErrorId = consumerApi.interceptors.response.use(
      interceptorResponseSuccess,
      interceptResponseError,
    );
    const consumerInterceptorReqId = consumerApi.interceptors.request.use(
      interceptConsumerRequest,
    );

    return () => {
      consumerApi.interceptors.response.eject(consumerInterceptorErrorId);
      consumerApi.interceptors.request.eject(consumerInterceptorReqId);
    };
  }, []);

  const interceptConsumerRequest = useEventCallback((request) => {
    if (!authorizationToken) return request;
    const headers = request.headers as Record<string, string>;
    headers["Authorization"] = `Bearer ${authorizationToken}`;
    return request;
  });

  const interceptorResponseSuccess = (response: AxiosResponse<any>) => {
    return response;
  };

  const interceptResponseError = useEventCallback((error: AxiosError) => {
    // @ts-ignore
    const messageError = error.response?.data?.message;

    // Alert.alert(messageError as string);
    return Promise.reject(messageError);
  });
}

export default useHttpInterceptor;
