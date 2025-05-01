import api from './api';
import { Account } from './types';

export const getAccounts = async (): Promise<Account[]> => {
  const response = await api.get<Account[]>('/account');
  return response.data;
};
