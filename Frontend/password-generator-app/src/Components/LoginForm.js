import { Link } from 'react-router-dom';
import classes from './LoginForm.module.css';
export default function LoginForm(){
    return(
        <div className={classes.item}>
            <h2 className={classes.title}>Login Form</h2>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label>Username</label>
                    <input type='text' required id="username" placeholder='Enter your username' />
                </div>
                <div className={classes.control}>
                    <label>Password</label>
                    <input type='password' required id="password" placeholder='Enter your password' />
                </div>
                <div className={classes.actions}>
                    <button>Login</button>
                    <button>Clear</button>
                </div>
                <div>
                    <Link to='/registration'> If you not registered please register here</Link>
                </div>
            </form>
        </div>
    )
}