import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react';
import NewExpense from './components/Expenses/NewExpenses/NewExpense';


const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
  {id: 'e3', title: 'Car Insurance', amount: 296.67, date: new Date(2021, 2, 12)},
  {is: 'e4', title: 'Netflix', amount: 50.0, date: new Date(2022, 4, 1)},

];



const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return([expense, ...prevExpenses]);
    });
  };

  //return React.createElement(
  //'div',
  //{}, 
  //React.createElement('h2', {}, "Let\'s get started"), 
  //React.createElement(Expenses, {items: expenses}),
  //);

  return (

    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/> 
    </div>
  );
}

export default App;
