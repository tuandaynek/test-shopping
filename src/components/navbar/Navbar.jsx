import { Link } from 'react-router-dom'

import './navbar.css'

function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link' to="/courses/create">Create New Courses</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;