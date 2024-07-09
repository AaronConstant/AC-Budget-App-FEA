import React, { act } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Styling/NavBar.scss'
export default function NavBar({activeAccount}) {
    const { sigin } = useParams()
    // console.log(activeAccount)

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
        <li>  
            <Link to='/:signIn' className='Sign-in'>Log Out</Link>
        </li>
        
    </ul>
</nav>
)
}
