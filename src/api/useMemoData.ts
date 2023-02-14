import useSWR from 'swr';
import { apiUrl } from 'src/constants';
import { fetcher } from './fetcher';
import type { Memo } from 'src/types';

export const useMemoData = (id?: number) => {
  const { data, error, isLoading } = useSWR<Memo, Error>(`${apiUrl}/${id}`, fetcher);

  return {
    memo: data,
    isLoading,
    isError: error,
  };
};
