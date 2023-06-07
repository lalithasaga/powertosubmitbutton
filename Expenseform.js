import React, { useState } from 'react';

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
  
    function handleTitleChange(event) {
      const newTitle = event.target.value;
      setEnteredTitle(newTitle);
      console.log('Title:', newTitle);
    }
  
    function handleAmountChange(event) {
      const newAmount = event.target.value;
      setEnteredAmount(newAmount);
      console.log('Amount:', newAmount);
    }
  
    function handleDateChange(event) {
      const newDate = event.target.value;
      setEnteredDate(newDate);
      console.log('Date:', newDate);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      const expense = {
        title: enteredTitle,
        amount: enteredAmount,
        date: enteredDate,
      };
  
      console.log(expense);
    }
  
    return (
      <div>
        <input
          type="text"
          placeholder="Expense Title"
          value={enteredTitle}
          onChange={handleTitleChange}
        />
        <input
          type="number"
          placeholder="Expense Amount"
          value={enteredAmount}
          onChange={handleAmountChange}
        />
        <input
          type="date"
          value={enteredDate}
          onChange={handleDateChange}
        />
        <button onClick={handleSubmit}>Add Expense</button>
      </div>
    );
  }
  
  export default ExpenseForm;
  
