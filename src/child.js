import React, { useContext } from 'react';
import {TransactionContext} from './transcontext';


function Child() {
    let {transactions} = useContext(TransactionContext);
    console.log(transactions)
    return (
        <div className="container">
            <h1 className="text-centre">Expense Tracker App</h1>
            <h3>Your Balance<br /> $150 </h3>
        <div className="expense-container">
            <h2>Income <br />$500</h2>
            <h2>Expense?<br />$250</h2>
        </div>
        <h3>History</h3>
        <hr/>
        <ul className="transaction-list">
            {transactions.map((transobj, ind)=>{
                return(<li>
                <span>{transobj.desc}</span>
                <span>{transobj.amount}</span>
            </li>
            )})}
        </ul>
        <h3>Add new Transation</h3>
        <hr/>
        <form className="transaction-form">
            <label>
                Enter Description <br/>
                <input type="text" required />
            </label>
            <label>
                <br/>
                Enter Amount <br/>
                <input type="number" required />
            </label>
            <br/>
            <input type="submit" value="Add Transaction"/>
        </form>
        </div>
        );
}
export default Child;