import api from './api';
import { Transaction, CreateTransactionPayload, UpdateTransactionPayload } from './types';

export const getTransactionsByAccount = async (
  accountNumber: string
): Promise<Transaction[]> => {
  const response = await api.get<Transaction[]>(`/transaction/by-account/${accountNumber}`);
  return response.data;
};

export const createTransaction = async (
  data: CreateTransactionPayload
): Promise<Transaction> => {
  const response = await api.post<Transaction>('/transaction', data);
  return response.data;
};

export const updateTransaction = async (
  id: number,
  data: UpdateTransactionPayload
): Promise<Transaction> => {
  const response = await api.put<Transaction>(`/transaction/${id}`, data);
  return response.data;
};

export const deleteTransaction = async (id: number): Promise<void> => {
  await api.delete(`/transaction/${id}`);
};
