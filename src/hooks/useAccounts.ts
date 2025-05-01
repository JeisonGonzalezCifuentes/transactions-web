import { useEffect, useState, useRef } from 'react';
import { getAccounts } from '../api/accounts';
import { Account } from '../api/types';

const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    const fetchAccounts = async () => {
      try {
        const response = await getAccounts();
        setAccounts(response);
        setIsLoading(false);
      } catch (err) {
        setError('Error al obtener las cuentas');
        setIsLoading(false);
        console.error('Error fetching accounts:', err);
      }
    };

    fetchAccounts();
  }, []);

  return { accounts, isLoading, error };
};

export default useAccounts;
