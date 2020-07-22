import React from 'react';


function Child() {
    let transactions=[
        {amount: 500, desc: "Cash"},
        {amount: -150, desc: "Redbull"},
        {amount: -200, desc: "EasyLoad"},
    ]
    return (
        <div className="container">
            <h1 className="text-centre">Expense Tracker App</h1>
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