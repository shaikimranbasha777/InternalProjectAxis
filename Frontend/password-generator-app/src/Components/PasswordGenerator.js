import {useState } from "react";
import Axios from 'axios';
import classes from './PasswordGenerator.module.css';
//import './PasswordStregth.css';

export default function PasswordGenerator(){
    const [upper, setUpper] = useState(false);
    const [lower, setLower] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [length, setLength] = useState(0);

    const [data , setData] = useState([]);

    const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');
    const [scoreStyle, setScoreStyle] = useState('');
    const [renderScoreContainer , setRender] = useState(false);
    
    const generatePassword = () => {
        
        let data = {
            isUpperCaseInclude : upper,
            isLowerCaseInclude : lower,
            isNumbersInclude : number,
            isSpecialCharectersInclude : symbol,
            passwordLength : length
        }

       fetch('http://localhost:8091/generate/password',{
             method: "POST",
             body: JSON.stringify(data),
             headers: {
                 "Content-Type" : "application/json",
                 "Access-Control-Allow-Origin":"*"
             }
         }).then(response => console.log(response.data))
         .catch(err => console.log(err));

         Axios.get('http://localhost:8091/generate/getAll')
         .then(res => {
             console.log(res.data)
             setData(res.data)
         })
         .catch(err => console.log(err));

         checkStrength();
         //clearContents();
    }

    const checkStrength = () => {
        const pass = data[data.length - 1];
        let inputPassword = {
            password: pass
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
         //clearContents();
         console.log(data[0])
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
        setUpper(false);
        setLower(false);
        setSymbol(false);
        setNumber(false);
        setLength(0);
    }

    return(
        <div className={classes.container}>
            <h2 className={classes.generatorHeading}>Generate Strong Password</h2>
            <div className={classes.checkboxContainer}>
                <div>
                    Upper Case Letters : <input type="checkbox" checked={upper} onChange={(e) => setUpper(e.target.checked)}/>
                </div>
                <div>
                    Lower Case Letters : <input type="checkbox" checked={lower} onChange={(e) => setLower(e.target.checked)}/>
                </div>
                <div>
                    Whole Numbers : <input type="checkbox" checked={number} onChange={(e) => setNumber(e.target.checked)}/>
                </div>
                <div>
                    Special Charecters : <input type="checkbox" checked={symbol} onChange={(e) => setSymbol(e.target.checked)}/>
                </div>
                <div>
                    Password length : <input type="number" value={length} onChange={(e) => setLength(e.target.value)}/>
                </div>
                <div className={classes.actions}>
                    <button type="submit" onClick={generatePassword}>Generate</button>
                    <button onClick={clearContents}>Clear</button>
                </div>
                
            </div>
            <div className={classes.passwordContainer}>
                Your new password is : <p>{(data[data.length-1])}</p>
            </div>
            {renderScoreContainer && 
                <div className={classes.scoreContainer}>
                    <h3>You got <span className={scoreStyle}>{score}</span> score of your <span className={scoreStyle}>{data[data.length-1]}</span></h3>
                    <h4 className={scoreStyle}>{message}</h4>
                </div>
            }
        </div>
    )
}