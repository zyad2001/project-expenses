import { useState } from "react";
import { ExpenceForm } from "./ExpenceForm";
import "./NewExpence.css";
export const NewExpence = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onsave(ExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenceForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
