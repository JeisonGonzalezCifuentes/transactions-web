import { Account } from "../api/types";
import { FaIdCard, FaUser, FaHashtag } from "react-icons/fa";

interface AccountInfoProps {
  account: Account;
}

const AccountInfo = ({ account }: AccountInfoProps) => (
  <div className="text-white mb-4 space-y-2">
    <p className="flex items-center gap-2">
      <FaIdCard className="text-[#86d0df]" />
      <span><strong>ID de cuenta:</strong> {account.id}</span>
    </p>
    <p className="flex items-center gap-2">
      <FaUser className="text-[#86d0df]" />
      <span><strong>Tenpista:</strong> {account.customerName}</span>
    </p>
    <p className="flex items-center gap-2">
      <FaHashtag className="text-[#86d0df]" />
      <span><strong>Número de cuenta:</strong> {account.number}</span>
    </p>
  </div>
);

export default AccountInfo;
