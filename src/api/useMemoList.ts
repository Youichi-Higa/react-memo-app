import useSWR from 'swr';
import { apiUrl } from 'src/constants';
import { fetcher } from './fetcher';
import type { Memo } from 'src/types';

export const useMemoList = () => {
  const { data, error, isLoading } = useSWR<Memo[], Error>(apiUrl, fetcher);
  const initialId = data && data[0].id;

  return {
    memoList: data,
    initialId,
    isLoading,
    isError: error,
  };
};
