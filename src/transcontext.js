import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransactions = [
{amount:500 , desc:"Cash"},
{amount:-200 , desc:"Redbull"},
{amount:-150 , desc:"EasyLoad"}
]
export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider =({children})=>{
let [state,dispatch] = useReducer(TransReducer,initialTransactions)
function addTransaction(transobj){
    dispatch({
        type : "ADD_TRANSACTION" ,
        payload : {
            amount:transobj.amount , 
            desc:transobj.desc


        },
    
    })


}
return(
<TransactionContext.Provider value={{
    transactons:state,
    addTransaction

}}>
    {children}

</TransactionContext.Provider>
)
}