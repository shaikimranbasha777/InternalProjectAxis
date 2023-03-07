import { useState } from "react";
import Axios from 'axios';
import classes from "./PasswordStregth.module.css";

function PasswordStrength(){

    const [password, setPassword] = useState('');
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');
    const [scoreStyle, setScoreStyle] = useState('');
    const [renderScoreContainer , setRender] = useState(false);


    const checkStregth = () => {
        let inputPassword = {
            password
        }
        fetch('http://localhost:8092/checkstrength/password',{
             method: "POST",
             body: JSON.stringify(inputPassword),
             headers: {
                 "Content-Type" : "application/json",
                 "Access-Control-Allow-Origin":"*"
             }
         }).then(response => {
            console.log(response.data);
            setScore(response.data);
        })
         .catch(err => console.log(err));

         Axios.get('http://localhost:8092/checkstrength/getscore')
         .then(res => {
            console.log(res.data);
            setScore(res.data);
            renderScore(res.data[0]);
         }).catch(err => console.log(err));

         //clearContents();
         setRender(true);
         clearContents();
    }

    const renderScore = (score) => {
        if(score === 20 || score === 30){
            setMessage("Your Password is worst it can esaily crack it");
            setScoreStyle(classes.score30);
        }else if(score === 40 || score === 50){
            setMessage("Your Password is very waek it can esaily crack it");
            setScoreStyle(classes.score50);
        }else if(score === 60 || score === 70){
            setMessage("Your Password is weak it can esaily crack it");
            setScoreStyle(classes.score70);
        }else if(score === 80 || score === 90){
            setMessage("Your Password is best it is dificult to crack it");
            setScoreStyle(classes.score90);
        }else if(score === 100){
            setMessage("Your Password is strong it is dificult to crack it");
            setScoreStyle(classes.score100);
        }else{
            setMessage('');
        }
    }

    const clearContents = () => {
        setPassword("");
    }


    return(
        <div className={classes.container}>
            <div className={classes.passwordContainer}>
                <div className={classes.control}>
                    <label>Password </label>
                    <input type='text' required id="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={classes.actions}>
                    <button type="submit" onClick={checkStregth}>Check Strength</button>
                    <button onClick={clearContents}>Clear</button>
                </div>
            </div>
            {renderScoreContainer && 
                <div className={classes.scoreContainer}>
                    <h3>You got <span className={scoreStyle}>{score}</span> score of your <span className={scoreStyle}>{password}</span></h3>
                    <h4 className={scoreStyle}>{message}</h4>
                </div>
            }
            
        </div>
        
    )
}

export default PasswordStrength;