import { Account } from "../api/types";
import TransactionRow from "./TransactionRow";
import useTransactions from "../hooks/useTransactions";
import Button from "../ui/Button";

type AccountDetailProps = {
  account: Account;
};

const TransactionsTable = ({ account }: AccountDetailProps) => {
  const {
    transactions,
    isLoading,
    editingTransaction,
    updatedAmount,
    updatedMerchant,
    updatedDate,
    handleEdit,
    handleSaveEdit,
    handleCancelEdit,
    handleChange,
    handleDelete,
    handleCreate,
  } = useTransactions(account);

  if (isLoading) {
    return (
      <div className="text-center text-white mt-8">
        Cargando transacciones ...
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4 mr-2">
        <h3 className="text-white text-xl font-semibold">Transacciones:</h3>
        <Button onClick={handleCreate}>
          Nueva transacción
        </Button>
      </div>

      {transactions && transactions.length > 0 ? (
        <table className="min-w-full border-separate border-spacing-y-3 text-sm sm:text-base">
          <thead>
            <tr className="text-left bg-[#1f1f1f] text-white">
              <th className="px-5 py-3 rounded-l-xl">ID</th>
              <th className="px-5 py-3">Comercio</th>
              <th className="px-5 py-3">Fecha</th>
              <th className="px-5 py-3">Monto</th>
              <th className="px-5 py-3 rounded-r-xl text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                isEditing={editingTransaction?.id === transaction.id}
                updatedAmount={updatedAmount}
                updatedMerchant={updatedMerchant}
                updatedDate={updatedDate}
                onChange={handleChange}
                onEdit={() => handleEdit(transaction)}
                onCancel={handleCancelEdit}
                onSave={() => handleSaveEdit(transaction)}
                onDelete={() => handleDelete(transaction)}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-white py-8">
          No se encontraron transacciones registradas para esta cuenta.
        </div>
      )}
    </div>
  );
};

export default TransactionsTable;
