import { Account } from "../api/types";
import AccountInfo from "../components/AccountInfo";
import TransactionsTable from "./TransactionsTable";

interface AccountDetailProps {
  account: Account;
}

const AccountDetail = ({ account }: AccountDetailProps) => {
  return (
    <div>
      <AccountInfo account={account} />
      <hr className="border-t border-gray-600 my-6" />
      <TransactionsTable account={account} />
    </div>
  );
};

export default AccountDetail;
