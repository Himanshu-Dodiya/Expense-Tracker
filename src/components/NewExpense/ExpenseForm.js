import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // we can use seperate state for each input field but we also can use 1 state because
  // all input field is related to same form so we pass object in useState
  // use multiple state approach because it is more correct way
  // whenever you update state and you depend on previous state
  // you should alternative writing method like inside,
  // look in titleChangeHandler
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput,seUserInput] =  useState({
  //   enteredTitle : '',
  //   EnteredAmount : '',
  //   EnteredDate : ''
  // });
  // event object that is important to get values that user enters
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle :event.target.value
    // })
    // by this method usestate works on delay so in this method it is ensure
    // that title have current and true value not a previous one
    // in upper method if there is number of state then it can be mix up with,
    // previous setstate value
    // so sue seperate state for easy understanding
    // setUserInput((prevState)=>{
    //   return {
    //     ...prevState,enteredTitle:event.target.value
    //   };
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredAmount:event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   EnteredDate:event.target.value,
    // })

    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    // by writing onSubmit event here we can submit whole form so thats why
    // we are writing here

    //how can we delete values after submitting form ?
    // Ans :  add value attribute and give value of state
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"// when we change state we change input also
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-04-04"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
