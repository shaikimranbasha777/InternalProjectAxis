import { Link } from "react-router-dom";
import classes from './Navbar.module.css';

function Navbar(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                Generate Strong Password
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/generate'>Generate Password</Link>
                    </li>
                    <li>
                        <Link to='/checkstrength'>Check Strength</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;