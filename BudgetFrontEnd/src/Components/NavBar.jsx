import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
        <Link to='/'><h1 className='title-name'>Budget App List</h1></Link>
        <ul>
            <li>
                <Link to='/about'>About your Budget</Link>
            </li>
            <li>
                <Link to='/transactions/new'>New transactions</Link>
            </li>

        </ul>
    </nav>
  )
}
