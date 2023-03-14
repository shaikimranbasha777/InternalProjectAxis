import { useState } from 'react';
import classes from './RegistrationForm.module.css';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setContact] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitForm = async event => {
        event.preventDefault();

        const data = {
            fullName,
            email,
            number,
            username,
            password
        }

        const url = "http://localhost:8090/authentication/register"
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
        const response = await fetch(url, options);
        const dataJson = await response.json();
        if (response.ok === true) {
            navigate('/login');
            console.log(dataJson);
        } else {
            console.log(data.err_msg);
        }
    }

    const clearContents = () => {
        setContact('');
        setEmail("");
        setFullName("");
        setUsername("");
        setPassword("");
    }

    return (
        <div className={classes.container}>
            <div>
                <img src='https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?' alt='Registration page' className={classes.loginImg} />
            </div>

            <div className={classes.item}>
                <h2 className={classes.title}>Registration Form</h2>
                <form className={classes.form} onSubmit={submitForm}>
                    <div className={classes.control}>
                        <label>Name</label>
                        <input type='text' required id="name" value={fullName} placeholder='Enter your name' onChange={e => setFullName(e.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label>Email</label>
                        <input type='email' required id="email" value={email} placeholder='Enter your email address' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label>Contact Number</label>
                        <input type='number' required id="number" value={number} placeholder='Enter your contact number' onChange={e => setContact(e.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label>Username</label>
                        <input type='text' required id="username" value={username} placeholder='Enter your username' onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label>Password</label>
                        <input type='password' required id="password" value={password} placeholder='Enter your password' onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className={classes.actions}>
                        <button type='submit'>Submit</button>
                        <button type='button' onClick={clearContents}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm;