import React,{ useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {

    //type1
    const [newTitle ,setNewTitle] = useState('');
    const [newAmount,setNewAmount]=useState('');
    const [newDate,setNewDate]=useState('');

    //type2
    // const [userInput, setUserInput] =useState({
    //     newTitle:'',
    //     newAmount:'',
    //     newDate:''
    // });

    const titleChangeHandler = (event) =>{
        //type1
        setNewTitle(event.target.value);

        //type2
        // setUserInput({
        //     ...userInput,
        //     newTitle:event.target.value,            
        // });

        //type3 =>it will update the state instantly
        // setUserInput((prevState)=>{
        //     return { ...prevState, newTitle:event.target.value };
        // });

    };
    const amountChangeHandler =(event)=>{
        //type1
        setNewAmount(event.target.value);

        //type2
        // setUserInput({
        //     ...userInput,
        //     newAmount:event.target.value,            
        // });        
    };
    const dateChangeHandler =(event)=>{
        //type1
        setNewDate(event.target.value);

        //type2
        // setUserInput({
        //     ...userInput,
        //     newDate:event.target.value,            
        // });
    };

 
    const submitHandler =(event)=>{
        event.preventDefault();

        const expenseData ={
            title:newTitle,
            amount:newAmount,
            date: new Date(newDate)
        };
       // console.log(expenseData);
        props.onSaveData(expenseData);
        setNewAmount('');
        setNewDate('');
        setNewTitle('');

    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Title</lable><br/>
                    <input type="text" value={newTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <lable>Amount</lable><br/>
                    <input type="number" min="0" step="0" value={newAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <lable>Date</lable><br/>
                    <input type="date" min="2022-01-01" max="2024-01-01" value={newDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button className="frmsubmit" type="submit">Add Expense</button>
                    
            </div>

        </form>
    );

}

export default ExpenseForm;