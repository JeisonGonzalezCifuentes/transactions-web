import { useCallback, useEffect, useRef, useState } from "react";
import { Account, CreateTransactionPayload, Transaction, UpdateTransactionPayload } from "../api/types";

import { getTransactionsByAccount } from '../api/transactions';
import { toast } from "react-toastify";

import { deleteTransaction, updateTransaction, createTransaction } from "../api/transactions";

const useTransactions = (account: Account) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetched = useRef(false);

    const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
    const [updatedAmount, setUpdatedAmount] = useState<number | null>(null);
    const [updatedMerchant, setUpdatedMerchant] = useState<string>("");
    const [updatedDate, setUpdatedDate] = useState<string>("");

    const cleanStatus = () => {
        setTransactions((prev) => prev.filter((t) => t.id !== -1));
        setEditingTransaction(null);
        setUpdatedAmount(null);
        setUpdatedMerchant("");
        setUpdatedDate("");
    }

    const handleCreate = () => {
        const newTransaction: Transaction = {
            id: -1,
            amount: 0,
            merchant: "",
            transactionDate: new Date().toISOString(),
            accountNumber: account.number,
        };

        cleanStatus();
        setTransactions((prev) => [newTransaction, ...prev]);
        setEditingTransaction(newTransaction);
    };

    const handleEdit = (transaction: Transaction) => {
        cleanStatus();
        setEditingTransaction(transaction);
        setUpdatedAmount(transaction.amount);
        setUpdatedMerchant(transaction.merchant);
        setUpdatedDate(transaction.transactionDate);
    };

    const handleDelete = async (transaction: Transaction) => {
        try {
            await deleteTransaction(transaction.id);

            setTransactions((prev) =>
                prev.filter((t) => t.id !== transaction.id)
            );

            cleanStatus();
            toast.success(`Transacción #${transaction.id} eliminada con éxito`);
        } catch (error: any) {
            console.error("Error al eliminar transacción:", error);
            toast.error(`Error al eliminar la transacción: ${error?.message || error}`);
        }
    };

    const handleSaveEdit = async (transaction: Transaction) => {
        const amountToSave = updatedAmount ?? transaction.amount;
        const merchantToSave = updatedMerchant || transaction.merchant;
        const dateToSave = updatedDate || transaction.transactionDate;

        if (!merchantToSave || !amountToSave || !dateToSave) {
            toast.error("Complete los valores de la transacción");
            return;
        }

        if (amountToSave < 0) {
            toast.error("El monto no puede ser negativo.");
            return;
        }

        const transactionDate = new Date(dateToSave);
        const now = new Date();
        if (transactionDate > now) {
            toast.error("La fecha de transacción no puede ser en el futuro.");
            return;
        }

        if (transaction.id === -1 && transactions.length >= 100) {
            toast.error("No se pueden registrar más de 100 transacciones por cuenta.");
            return;
        }

        if (transaction.id === -1) {
            try {
                const payload: CreateTransactionPayload = {
                    amount: amountToSave,
                    merchant: merchantToSave,
                    transactionDate: dateToSave,
                    accountNumber: transaction.accountNumber,
                };

                const created = await createTransaction(payload);

                setTransactions((prev) =>
                    [created, ...prev.filter((t) => t.id !== -1)]
                );

                toast.success(`Transacción #${created.id} creada con éxito`);
            } catch (error: any) {
                console.error("Error al crear transacción:", error);
                toast.error(`Error al crear la transacción: Verifica los datos ingresados`);
            }
        } else {
            try {
                const payload: UpdateTransactionPayload = {
                    amount: amountToSave,
                    merchant: merchantToSave,
                };

                const updated = await updateTransaction(transaction.id, payload);

                setTransactions((prev) =>
                    prev.map((t) => (t.id === transaction.id ? updated : t))
                );

                cleanStatus();
                toast.success(`Transacción #${transaction.id} actualizada con éxito`);
            } catch (error: any) {
                console.error("Error al actualizar transacción:", error);
                toast.error(`Error al actualizar la transacción: Verifica los datos ingresados`);
            }
        }
    };

    const handleCancelEdit = () => {
        cleanStatus();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, field: "merchant" | "amount" | "date") => {
        if (field === "merchant") {
            setUpdatedMerchant(event.target.value);
        } else if (field === "amount") {
            setUpdatedAmount(parseFloat(event.target.value));
        } else if (field === "date") {
            setUpdatedDate(event.target.value);
        }
    }

    const fetchTransactions = useCallback(async () => {
        try {
            setIsLoading(true);

            const response = await getTransactionsByAccount(account.number);
            setTransactions(response);
            setIsLoading(false);
        } catch (err) {
            setError('Error al obtener las transacciones');
            setIsLoading(false);
            console.error('Error fetching transactions:', err);
        }
    }, [account.number]);

    useEffect(() => {
        if (fetched.current) {
            return;
        }

        fetched.current = true;
        fetchTransactions();
    }, [fetchTransactions]);

    return {
        transactions,
        isLoading,
        error,
        editingTransaction,
        updatedAmount,
        updatedMerchant,
        updatedDate,
        handleEdit,
        handleSaveEdit,
        handleCancelEdit,
        handleChange,
        handleDelete,
        handleCreate
    };
}

export default useTransactions;