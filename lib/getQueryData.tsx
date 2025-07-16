import { MetaType } from "@/@types/MetaType";
import { getRequest } from "@/service/getRequest";
import { useQuery } from "@tanstack/react-query";

export const getQueryData = (
  url: string,
  actions?: { data: any[]; meta: MetaType } | any,
  queryKey?: string,
  refresh?: any
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey, refresh],
    queryFn: () => getRequest(url),
    initialData: actions,
  });
  return { data, isLoading, error };
};

export const getQuery = (url: string, queryKey?: string, id?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => getRequest(url),
  });
  return { data, isLoading, error };
};
