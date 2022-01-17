import ExpenseItem from '../ExpenseItem/index';

function Expenses(props) {
    const { items } = props;
    return (
    items.map(item => {
        return (
            <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
        );
    }));
}
export default Expenses;
