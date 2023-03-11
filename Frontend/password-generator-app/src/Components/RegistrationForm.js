import { useState } from 'react';
import classes from './RegistrationForm.module.css';
//import Axios from 'axios';
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

        /*Axios.post("http://localhost:8093/register", {
            fullName : fullName,
            email : email,
            number : number,
            username : username,
            password : password
        }).then(res => console.log(res.data))
        .catch(err => console.log(err));*/

        alert(fullName + " " + email + " " + number + ' ' + username + ' ' + password);

        const url = "http://localhost:8093/authentication/register"
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

        /* fetch("http://localhost:8090/register", {
             method: "POST",
             body: JSON.stringify(data),
             headers: {
                 "Content-Type" : "application/json",
                 "Access-Control-Allow-Origin":"*"
             }
         }).then(res => console.log(res.data))
         .catch(err => console.log(err));*/
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
                        <input type='text' required id="name" placeholder='Enter your name' onChange={e => setFullName(e.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label>Email</label>
                        <input type='email' required id="email" placeholder='Enter your email address' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label>Contact Number</label>
                        <input type='number' required id="number" placeholder='Enter your contact number' onChange={e => setContact(e.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label>Username</label>
                        <input type='text' required id="username" placeholder='Enter your username' onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label>Password</label>
                        <input type='password' required id="password" placeholder='Enter your password' onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className={classes.actions}>
                        <button type='submit'>Submit</button>
                        <button>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm;