import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { faker } from '@faker-js/faker'

export default function Home() {
    const API = import.meta.env.VITE_BASE_URL
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(res => {
            setTransactions(res)
        })
        .catch(err => console.error(err))

    },[])

    const randomName = faker.person.firstName()
    console.log(randomName);
  return (
    <div>
        {transactions.map((item, i) => { 
            return( <div key = { i }>
                { item.name }
            </div>)
        })}
    </div>
  )
}
