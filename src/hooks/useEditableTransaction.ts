import { useState } from "react";
import { Transaction } from "../api/types";
import { updateTransaction } from "../api/transactions";
import { toast } from "react-toastify";

const useEditableTransaction = () => {
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [updatedAmount, setUpdatedAmount] = useState<number | null>(null);
  const [updatedMerchant, setUpdatedMerchant] = useState<string>("");

  // Inicia la edición de una transacción
  const startEdit = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setUpdatedAmount(transaction.amount);
    setUpdatedMerchant(transaction.merchant);
  };

  // Cancela la edición
  const cancelEdit = () => {
    setEditingTransaction(null);
    setUpdatedAmount(null);
    setUpdatedMerchant("");
  };

  // Maneja cambios en los inputs del formulario de edición
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "merchant" | "amount"
  ) => {
    const value = e.target.value;
    if (field === "merchant") {
      setUpdatedMerchant(value);
    } else {
      const amount = parseFloat(value);
      setUpdatedAmount(isNaN(amount) ? null : amount);
    }
  };

  // Guarda los cambios de una transacción editada
  const saveEdit = async (onSuccess: (updated: Transaction) => void) => {
    if (!editingTransaction || updatedAmount === null || updatedMerchant.trim() === "") return;

    try {
      const updatedTx = await updateTransaction(editingTransaction.id, {
        amount: updatedAmount,
        merchant: updatedMerchant,
      });

      toast.success("Transacción actualizada con éxito");
      setEditingTransaction(null);
      setUpdatedAmount(null);
      setUpdatedMerchant("");
      onSuccess(updatedTx); // Notifica al componente padre para refrescar
    } catch (error) {
      toast.error("Error al actualizar la transacción");
    }
  };

  return {
    editingTransaction,
    updatedAmount,
    updatedMerchant,
    startEdit,
    cancelEdit,
    handleInputChange,
    saveEdit,
  };
};

export default useEditableTransaction;
