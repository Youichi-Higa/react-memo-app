import axios from 'axios';
import { apiUrl } from 'src/constants';
import type { Memo } from 'src/types';

export const updateMemo = (id: number, memo: Pick<Memo, 'title' | 'body'>) => {
  axios.put(`${apiUrl}/${id}`, memo);
};
