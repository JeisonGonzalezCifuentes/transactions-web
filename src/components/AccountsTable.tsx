import { useState } from "react";
import { Account } from "../api/types";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import AccountDetail from "./AccountDetail";
import useAccounts from "../hooks/useAccounts";

const TableHeader = () => (
  <thead>
    <tr className="text-left text-white">
      <th className="px-4 py-2">ID</th>
      <th className="px-4 py-2">Tenpista</th>
      <th className="px-4 py-2"># de Cuenta</th>
      <th className="px-4 py-2">Acciones</th>
    </tr>
  </thead>
);

const TableRow = ({
  account,
  index,
  onView,
}: {
  account: Account;
  index: number;
  onView: (account: Account) => void;
}) => (
  <motion.tr
    key={account.id}
    className="bg-[#292b2a] rounded-xl text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.3,
      delay: index * 0.1,
    }}
  >
    <td className="px-4 py-3 rounded-l-xl">{account.id}</td>
    <td className="px-4 py-3">{account.customerName}</td>
    <td className="px-4 py-3">{account.number}</td>
    <td className="px-4 py-3 rounded-r-xl">
      <Button onClick={() => onView(account)}>Ver detalle</Button>
    </td>
  </motion.tr>
);

const AccountsTable = () => {
  const { accounts, isLoading, error } = useAccounts();
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  const handleOpenModal = (account: Account) => setSelectedAccount(account);
  const handleCloseModal = () => setSelectedAccount(null);

  if (isLoading) {
    return (
      <div className="text-center text-white mt-8">Cargando cuentas ...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-8">
        Ocurrió un error consultando las cuentas: {error}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <motion.table
        className="min-w-full table-auto border-separate border-spacing-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TableHeader />
        <motion.tbody
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {accounts.map((account, index) => (
            <TableRow
              key={account.id}
              account={account}
              index={index}
              onView={handleOpenModal}
            />
          ))}
        </motion.tbody>
      </motion.table>

      {selectedAccount && (
        <Modal onClose={handleCloseModal}>
          <AccountDetail account={selectedAccount} />
        </Modal>
      )}
    </div>
  );
};

export default AccountsTable;
