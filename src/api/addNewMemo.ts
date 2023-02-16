import axios from 'axios';
import { apiUrl, defaultMenu } from 'src/constants';

export const addNewMemo = () => {
  return axios.post(apiUrl, defaultMenu);
};
