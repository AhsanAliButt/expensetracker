const initialTransactions = [
{amount:500 , desc:"Cash"},
{amount:-150 , desc:"Redbull"},
{amount:-200 , desc:"EasyLoad"}
]
export const TransactionContext = createContext(initialTransactions);