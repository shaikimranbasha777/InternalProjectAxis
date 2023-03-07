import classes from './RegistrationForm.module.css';

function RegistrationForm(){

    return(
        <div className={classes.item}>
            <h2 className={classes.title}>Registration Form</h2>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label>Name</label>
                    <input type='text' required id="name" placeholder='Enter your name' />
                </div>
                <div className={classes.control}>
                    <label>Email</label>
                    <input type='email' required id="email" placeholder='Enter your email address' />
                </div>
                <div className={classes.control}>
                    <label>Contact Number</label>
                    <input type='number' required id="number" placeholder='Enter your contact number' />
                </div>
                <div className={classes.control}>
                    <label>Username</label>
                    <input type='text' required id="username" placeholder='Enter your username' />
                </div>
                <div className={classes.control}>
                    <label>Password</label>
                    <input type='password' required id="password" placeholder='Enter your password' />
                </div>
                <div className={classes.actions}>
                    <button>Submit</button>
                    <button>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;