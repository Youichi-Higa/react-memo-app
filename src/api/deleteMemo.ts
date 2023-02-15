import axios from 'axios';
import { apiUrl } from 'src/constants';

export const deleteMemo = (id: number) => {
  return axios.delete(`${apiUrl}/${id}`);
};
