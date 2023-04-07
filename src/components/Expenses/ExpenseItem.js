import React  from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const  ExpenseItem=(props)=> {
  
  // const [title,setTitle] = useState(props.title);
  // console.log("expense iitem function evaluated");
  // // useState() returns an array with exactly 2 elements
  // const clickHandler = () => {
  //   setTitle('updated!');
  //   // setTitle is function which saves new value and because of this component will be recall the component is reevaluated
  //  console.log(title);
  // };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}/-</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
  );
}
export default ExpenseItem;
