import { useQuery } from "@tanstack/react-query";
import { getGuestAuthentication } from "../services/getGuestAuthentication";

export const useGetGuestAuthentication = () => {
  return useQuery({
    queryKey: ["GETTING_SESSION_ID_GUEST"],
    refetchInterval: 10 * 60 * 1000,
    refetchOnMount: true,
    queryFn: getGuestAuthentication,
    retry: 2,
    retryDelay: 5000,
  });
};
