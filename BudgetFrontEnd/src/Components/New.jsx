import React,{ useState }from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
export default function New() { 
    const API = import.meta.env.VITE_BASE_URL
    const [newtransaction, setNewTransaction] = useState( {
        name: "",
        id: nanoid(6) ,
        amount: "",
        date: "",
        from: "",
        category: ""
    })

    const monitorChange = (e) => {
        setNewTransaction((prevState) =>{
            setNewTransaction( {...prevState, [e.target.name] : e.target.value})
        })

    }

    const handleSubmit =()=> {
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
        })

    }

  return (

    <form>
        <fieldset>
            <legend>New Transactions</legend>
            <label htmlFor="date">
                Date:
            <input type="text" placeholder='MM/DD/YYYY' name='date' onChange={monitorChange}/>
            </label>
            <br />
            <label htmlFor="name">
                Name: 
            <input type="text" placeholder='Name' name='name'onChange={monitorChange}/>
            </label>
            <br />
            <label htmlFor="amount">
                Amount:
            <input type="text" placeholder='Amount' name='amount'onChange={monitorChange}/>
            </label>
            <br />
            <label htmlFor="from">
                From: 
            <input type="text" placeholder='From' name='from'onChange={monitorChange}/>
            </label>
            <br />
            <label htmlFor="category">
                Category: 
            <input type="text" placeholder='Category' name='category'onChange={monitorChange}/>    
            </label>

            <button onSubmit={ handleSubmit }>Submit</button>
        </fieldset>
    </form>

      )
    }
