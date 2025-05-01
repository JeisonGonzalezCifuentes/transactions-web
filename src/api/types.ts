export interface Account {
    id: number;
    number: string;
    customerName: string;
}

export interface Transaction {
    id: number;
    amount: number;
    merchant: string;
    transactionDate: string;
    accountNumber: string;
}

export interface CreateTransactionPayload {
    accountNumber: string;
    amount: number;
    merchant: string;
    transactionDate: string;
}

export interface UpdateTransactionPayload {
    amount: number;
    merchant: string;
}