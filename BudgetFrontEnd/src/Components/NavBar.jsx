import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/NavBar.scss'
export default function NavBar() {

  return (   
<nav>
    <ul className='nav-ul'>
        <li>
            <Link to='/about'>About your Budget</Link>
        </li>
    <Link to='/transactions'><h1 className='title-name'>Budget Sapien</h1></Link>
        <li>
            <Link to='/transactions/new'>New transactions</Link>
        </li>
    <Link to='/SignIn' className='Sign-in'><li>Log Out</li></Link>
    </ul>
</nav>
)
}
