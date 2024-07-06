import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../Styling/Home.scss'

export default function Home({transactions}) {
    const activeLink = true;

    if (!transactions || !Array.isArray(transactions)) {
        return <div>Loading Your Budget List...</div>;
      }


  return (
    <div className='table-container'>
        <h1>Hello (Insert Username)</h1>
                <h2>Total Budget: {transactions.reduce((total,item) => { return parseInt(item.amount) + total},0)}
                </h2>
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
                        <>
                        <tr key = { i } className='table-row'>
                            <td>{items.id}</td>
                            <td>{items.date}</td>
                            <td><Link to={`/transactions/${ i }`} style={{color: 'blue'}}>{ items.transaction }</Link></td>
                            <td>{items.from}</td>
                            <td style={{ color: items.amount > 0 ? 'green' : 'red' }}> {items.amount}</td>                            
                            <td>{items.category}</td>
                            <td>
                                <details style={{position: 'relative'}}>
                                    <summary>...</summary>
                                        <ul style={{position: 'absolute'}} className='drop-down'>
                                            <Link to={`/transactions/${ i }/edit`} style={{color: 'black'}} className='drop-down__content'>
                                                <li >Edit</li>
                                            </Link>
                                            <Link to={`/transactions/${ i }`} style={{color: 'red'}} className='drop-down__content'>
                                                <li >Delete</li>
                                            </Link> 
                                        </ul>
                                </details>
                            </td>
                        </tr>
                        </>
                    )})
                }
            </tbody>
        </table>
    </div>
  )
}
