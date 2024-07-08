import React,{ useState }from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import '../Styling/New.scss'

export default function New({setTransactions}) { 
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()
    const [newtransaction, setNewTransaction] = useState( {
        transaction: "",
        id: nanoid(6) ,
        amount: "",
        date: "",
        from: "",
        category: ""
    })

    const monitorChange = (e) => {
        setNewTransaction(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit =(e)=> {
        e.preventDefault()

        fetch(API, {
            method:"POST",
            body: JSON.stringify(newtransaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            navigate("/transactions")
            setTransactions((prevState)=>{
                return [...prevState, res]
            })
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='container'>
        <form onSubmit={ handleSubmit }>
            <fieldset>
                <legend>New Transaction</legend>
                <label htmlFor='transaction'>Transaction for:</label> 
                <input 
                    type="text" 
                    placeholder='Transaction' 
                    name='transaction'
                    id='transaction'
                    value= { newtransaction.transaction }
                    onChange= { monitorChange }
                    required
                />
                    <br />
                    <label htmlFor='date'>Date:</label> 
                            
                <input 
                    type="date" 
                    id='date'
                    placeholder='YYYY/MM/DD' 
                    name='date'
                    value={newtransaction.date}
                    onChange={monitorChange}
                    required
                />
                <br />
                <label htmlFor='amount'>Amount:</label> 
            
                <input 
                    type="text" 
                    placeholder='Amount' 
                    name='amount'
                    id='amount'
                    value={newtransaction.amount}
                    onChange={monitorChange}
                    required
                />
                <br />
                    <label htmlFor='from'>Business:</label> 
                <input 
                    type="text" 
                    placeholder='From'
                    name='from' 
                    id='from'
                    value={newtransaction.from}
                    onChange={monitorChange}
                    required
                />
                <br />
                    <label htmlFor='category'>Category:</label> 
                <select id='category'name='category' value= { newtransaction.category } onChange= { monitorChange } required>
                    <option value='Income'>Income</option>
                    <option value='Savings'>Savings</option>
                    <option value='Pet'>Pet</option>
                    <option value='Groceries'>Groceries</option>
                    <option value='Credit Card'>Credit Card Payment</option>
                    <option value='Entertainment'>Entertainment</option>
                    <option value='Other'>Other</option>
                </select>
                <br /> 
                <input id='submit'type='submit' value='Submit New Entry'/>
                        
            </fieldset>
        </form>
    
        </div>
    )}