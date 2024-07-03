import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function Show() {
    const API = import.meta.env.VITE_BASE_URL
    const [transactionInfo, setTransactionInfo] = useState([])
    const { index } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/${index}`)
        .then(res=> res.json())
        .then(res => setTransactionInfo(res))
        .catch(err => console.error(err))
    },[])

    const handleDelete = () => {
        fetch(`${API}/${index}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(res => 
            navigate('/transactions')
        )
    }


    return (
        <div className='info-container'>
          {transactionInfo && (
            <div className='info-container__transaction-info'>
              <h1>{`${transactionInfo.name}: ${transactionInfo.amount}`}</h1>
              <h3>
                {transactionInfo.amount > 0
                  ? `Received from: ${transactionInfo.name}`
                  : `Expense for: ${transactionInfo.name}`}
              </h3>
              <button>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      );
}
