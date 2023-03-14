import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from 'axios';
import classes from './PasswordGenerator.module.css';
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import copy from "copy-to-clipboard";

export default function PasswordGenerator() {

    const navigate = useNavigate();

    const jwtToken = Cookies.get('jwt_token')
    //console.log(jwtToken);
    useEffect(() => {
        if (jwtToken === undefined) {
            navigate("/login");
        }

    })

    const [upper, setUpper] = useState(false);
    const [lower, setLower] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [length, setLength] = useState(0);

    const [data, setData] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    /*const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');
    const [scoreStyle, setScoreStyle] = useState('');
    const [renderScoreContainer, setRender] = useState(false);*/

    const generatePassword = () => {

        let data = {
            isUpperCaseInclude: upper,
            isLowerCaseInclude: lower,
            isNumbersInclude: number,
            isSpecialCharectersInclude: symbol,
            passwordLength: length
        }

        fetch('http://localhost:8090/generate/password', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => console.log(response))
            .catch(err => console.log(err));

        Axios.get('http://localhost:8090/generate/getAll')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err));

        //checkStrength();
        //clearContents();
        if(length === 0 || length === ''){
            setErrorMsg("* Length Required");
            setShowPassword(false);
        }else{
            setShowPassword(true);
            setErrorMsg('');
        }
    }

    /*const checkStrength = () => {
        //const pass = data;
        let inputPassword = {
            password: data
        }

        fetch('http://localhost:8092/checkstrength/password', {
            method: "POST",
            body: JSON.stringify(inputPassword),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => {
            console.log(response.data);
            setScore(response.data);
            renderScore(response.data);
        })
            .catch(err => console.log(err));

        Axios.get('http://localhost:8092/checkstrength/getscore')
            .then(res => {
                console.log(res.data);
                setScore(res.data);
                renderScore(res.data);
            }).catch(err => console.log(err));

        //clearContents();
        setRender(true);
    }

    const renderScore = (score) => {
        if (score === 20 || score === 30) {
            setMessage("Your Password is worst it can esaily crack it");
            setScoreStyle(classes.score30);
        } else if (score === 40 || score === 50) {
            setMessage("Your Password is very waek it can esaily crack it");
            setScoreStyle(classes.score50);
        } else if (score === 60 || score === 70) {
            setMessage("Your Password is weak it can esaily crack it");
            setScoreStyle(classes.score70);
        } else if (score === 80 || score === 90) {
            setMessage("Your Password is best it is dificult to crack it");
            setScoreStyle(classes.score90);
        } else if (score === 100) {
            setMessage("Your Password is strong it is dificult to crack it");
            setScoreStyle(classes.score100);
        } else {
            setMessage('');
        }
    }*/


    const clearContents = () => {
        setUpper(false);
        setLower(false);
        setSymbol(false);
        setNumber(false);
        setLength(0);
        setShowPassword(false);
        setErrorMsg('');
    }

    const copyPaasword = () => {
        copy(data[data.length -1]);
        alert("Copied " + data[data.length -1]);
    }

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div>
                    <img src="https://img.freepik.com/free-photo/business-people-holding-golden-key_53876-74779.jpg" alt="generator" className={classes.homeImg} />
                </div>
                <div>
                    {/* <h2 className={classes.generatorHeading}>Generate Strong Password</h2> */}
                    <div className={classes.checkboxContainer}>
                        <div className={classes.inputContainer}>
                            Upper Case Letters  &nbsp; : &nbsp;<input type="checkbox" checked={upper} onChange={(e) => setUpper(e.target.checked)} />
                        </div>
                        <div className={classes.inputContainer}>
                            Lower Case Letters &nbsp; : &nbsp;<input type="checkbox" checked={lower} onChange={(e) => setLower(e.target.checked)} />
                        </div>
                        <div className={classes.inputContainer}>
                            Whole Numbers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;<input type="checkbox" checked={number} onChange={(e) => setNumber(e.target.checked)} />
                        </div>
                        <div className={classes.inputContainer}>
                            Special Charecter &nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;<input type="checkbox" checked={symbol} onChange={(e) => setSymbol(e.target.checked)} />
                        </div>
                        <div className={classes.inputContainer}>
                            Password length &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;<input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                        </div>
                        <p>{errorMsg}</p>
                        <div className={classes.actions}>
                            <button type="submit" onClick={generatePassword}>Generate</button>
                            <button onClick={clearContents}>Clear</button>
                        </div>

                    </div>
                    {showPassword &&
                        <div className={classes.passwordContainer}>
                            <p>{(data[data.length - 1])}</p>
                            <button onClick={copyPaasword}>Copy</button>
                        </div>}
                    {/*renderScoreContainer &&
                        <div className={classes.scoreContainer}>
                            <h3>You got <span className={scoreStyle}>{score}</span> score of your <span className={scoreStyle}>{data}</span></h3>
                            <h4 className={scoreStyle}>{message}</h4>
                        </div>
    */}
                </div>
            </div>
        </>

    )
}