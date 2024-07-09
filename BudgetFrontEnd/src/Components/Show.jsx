import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import '../Styling/Show.scss'
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
              <h1 className='description-amt'>{`${transactionInfo.transaction}: ${transactionInfo.amount}`}</h1>
              <h3 className='description-'>
                {transactionInfo.amount > 0
                  ? `Received from: ${ transactionInfo.from }`
                  : `Expense for: ${ transactionInfo.category }`}
              </h3>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam rem illo maiores architecto, voluptate aliquid consequatur deleniti adipisci alias in nisi ipsam quisquam? Suscipit a nihil ea recusandae cum laboriosam?
              Libero esse reprehenderit cupiditate velit quisquam officia assumenda deleniti rerum quos consequatur nulla, itaque, ab dolores, ratione laborum aperiam veniam delectus! Explicabo sunt praesentium ad, tenetur molestias soluta tempora aliquid?
              Corrupti voluptate, porro corporis soluta at dolore facere voluptatem. Soluta natus mollitia distinctio, et eligendi veritatis deserunt at fugiat in odit assumenda pariatur commodi quam quo incidunt sequi quos reprehenderit!</p>

              <div className='button-selections'>
                <Link to= { `/transactions/${ index }/edit` } className='button-action'>
                  <button className='button-action1'>Edit</button>
                </Link>
                  <button onClick={handleDelete} className='button-action2'>Delete</button>
              </div>

              </div>
          )}
        </div>
      );
}
