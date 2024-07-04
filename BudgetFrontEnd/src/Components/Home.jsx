import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../Styling/Home.scss'

export default function Home({transactions}) {

    if (!transactions || !Array.isArray(transactions)) {
        return <div>Loading Your Logs</div>;
      }


  return (
    <div className='table-container'>
        <table className='table-container__transaction-table'>
            <thead>
                <tr className='table-container__header'>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Transaction</th>
                    <th>From</th>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                { transactions.map((items,i) => {
                    return (
                        <tr key = { i } className='table-row'>
                            <td>{items.id}</td>
                            <td>{items.date}</td>
                            <td><Link to={`/transactions/${ i }`} className='transactions-link'>{ items.transaction }</Link></td>
                            <td>{items.from}</td>
                            <td>{items.amount}</td>
                            <td>{items.category}</td>
                        </tr>
                    )})
                }
            </tbody>
        </table>
    </div>
  )
}
