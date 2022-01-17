import ExpenseForm from "../ExpenseForm";
import './style.css';

const NewExpense = (props) => {
    const saveExpenseHandler = (newExpense) => {
        const expense = {
            ...newExpense,
            id: Math.random().toString()
        }
        console.log(expense);
        props.onAddExpense(expense);
    } 
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpense