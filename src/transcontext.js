import { createContext } from "react";

const initialTransactions = [
{amount:500 , desc:"Cash"},
{amount:-200 , desc:"Redbull"},
{amount:-150 , desc:"EasyLoad"}
]
export const TransactionContext = createContext(initialTransactions);