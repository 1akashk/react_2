import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const DUMMY_EXPENSES=[
  { id:1, title:'Rent', amount:3000, date: new Date(2020, 9, 15)},
  { id:2, title:'Recharge', amount:250, date: new Date(2021, 9, 10)},
  { id:3, title:'Vegitables', amount:500, date: new Date(2022, 9, 11)},
  { id:4, title:'Dress', amount:5000, date: new Date(2023, 9, 1)},
  { id:5, title:'Shoe', amount:1000, date: new Date(2023, 9, 14)},
  { id:6, title:'Travel', amount:1500, date: new Date(2023, 9, 9)},
  { id:7, title:'Laptop', amount:30000, date: new Date(2023, 9, 8)},
  { id:8, title:'Headphone', amount:1500, date: new Date(2023, 9, 16)}
];


const App = () => {

  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler =expense =>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 className="title">My Expenses !!!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses className="main" items={expenses} />
    </div>
  );
}

export default App;
