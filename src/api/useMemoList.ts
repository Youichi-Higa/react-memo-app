import useSWR from 'swr';
import { apiUrl } from 'src/constants';
import { fetcher } from './fetcher';
import type { Memo } from 'src/types';

export const useMemoList = () => {
  const { data, error, isLoading } = useSWR<Memo[], Error>(apiUrl, fetcher);

  return {
    memoList: data,
    isLoading,
    isError: error,
  };
};
