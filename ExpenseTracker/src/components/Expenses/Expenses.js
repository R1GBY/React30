import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './NewExpenses/ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const[filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {

    setFilteredYear(selectedYear);

  };

  const filteredExpenses = props.items.filter(expense => {
    return (expense.date.getFullYear().toString() === filteredYear);

  });

    return(
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filteredExpenses}/>
        
{/*           <ExpenseItem 
          date = {props.items[0].date}
          title={props.items[0].title} 
          amount={props.items[0].amount}>
          </ExpenseItem> */}

        </Card>

    );
}

export default Expenses;