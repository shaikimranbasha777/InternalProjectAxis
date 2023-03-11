import { Link, useNavigate } from "react-router-dom";
import classes from './Navbar.module.css';
import Cookies from 'js-cookie'

function Navbar(){

    const navigate = useNavigate();
    const onClickLogout = () => {
        Cookies.remove("jwt_token");
        navigate('/login');
    }

    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to='/'><h2>Generate Strong Password</h2></Link>
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
                    <li>
                        <button type="button" onClick={onClickLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;