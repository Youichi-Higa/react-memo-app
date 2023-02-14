import useSWR from 'swr';
import { fetcher } from './fetcher';
import type { Memo } from 'src/types';

export const useMemoList = () => {
  const { data, error, isLoading } = useSWR<Memo[], Error>(
    'http://localhost:3000/content',
    fetcher
  );

  return {
    memoList: data,
    isLoading,
    isError: error,
  };
};
