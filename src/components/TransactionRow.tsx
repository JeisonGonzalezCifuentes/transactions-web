import { Transaction } from "../api/types";
import { FiTrash2, FiEdit, FiSave, FiX } from "react-icons/fi";

type Props = {
  transaction: Transaction;
  isEditing: boolean;
  updatedAmount: number | null;
  updatedMerchant: string;
  updatedDate: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "merchant" | "amount" | "date"
  ) => void;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  onDelete: () => void;
};

const TransactionRow = ({
  transaction,
  isEditing,
  updatedAmount,
  updatedMerchant,
  updatedDate,
  onChange,
  onEdit,
  onCancel,
  onSave,
  onDelete,
}: Props) => {
  return (
    <tr className="bg-[#2c2c2c] text-white shadow-md rounded-xl overflow-hidden">
      <td className="px-5 py-3 rounded-l-xl">{transaction.id}</td>

      <td className="px-5 py-3">
        {isEditing ? (
          <input
            type="text"
            value={updatedMerchant}
            onChange={(event) => onChange(event, "merchant")}
            className="w-full min-w-[100px] px-3 py-2 bg-[#3a3a3a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Comercio"
          />
        ) : (
          transaction.merchant
        )}
      </td>

      <td className="px-5 py-3">
        {transaction.id === -1 ? (
          <input
            type="datetime-local"
            value={updatedDate}
            onChange={(event) => onChange(event, "date")}
            className="w-full min-w-[220px] px-3 py-2 bg-[#3a3a3a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Selecciona fecha y hora"
          />
        ) : (
          <>{new Date(transaction.transactionDate).toLocaleString()}</>
        )}
      </td>

      <td className="px-5 py-3">
        {isEditing ? (
          <input
            type="number"
            value={updatedAmount ?? ""}
            onChange={(event) => onChange(event, "amount")}
            className="w-full min-w-[100px] px-3 py-2 bg-[#3a3a3a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Monto"
            step="0.01"
          />
        ) : (
          `$${transaction.amount.toFixed(2)}`
        )}
      </td>

      <td className="px-5 py-3 rounded-r-xl text-center">
        <div className="flex justify-center gap-3">
          {isEditing ? (
            <>
              <button
                onClick={onSave}
                className="hover:text-green-400 transition-colors"
                title="Guardar"
              >
                <FiSave size={20} />
              </button>
              <button
                onClick={onCancel}
                className="hover:text-red-400 transition-colors"
                title="Cancelar"
              >
                <FiX size={20} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onEdit}
                className="hover:text-blue-400 transition-colors"
                title="Editar"
              >
                <FiEdit size={20} />
              </button>
              <button
                onClick={onDelete}
                className="hover:text-red-500 transition-colors"
                title="Eliminar"
              >
                <FiTrash2 size={20} />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TransactionRow;
