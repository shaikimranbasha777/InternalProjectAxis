import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//import Axios from 'axios';
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

    const [data, setData] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const generatePassword = async (event) => {
        event.preventDefault();

        let data = {
            isUpperCaseInclude: upper,
            isLowerCaseInclude: lower,
            isNumbersInclude: number,
            isSpecialCharectersInclude: symbol,
            passwordLength: length
        }

        const response = await fetch('http://localhost:8090/generate/password', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        const pass = await response.json()
        console.log(pass.password)
        setData(pass.password);

        //clearContents();
        if (length === 0 || length === '') {
            setErrorMsg("* Length Required");
            setShowPassword(false);
           
        } else {
            setShowPassword(true);
            setErrorMsg('');
        }
    }

    


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
        copy(data);
        alert("Copied " + data);
    }

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div>
                    <img src="https://img.freepik.com/free-photo/business-people-holding-golden-key_53876-74779.jpg" alt="generator" className={classes.homeImg} />
                </div>
                <div>
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
                            <p>{(data)}</p>
                            <button onClick={copyPaasword}>Copy</button>
                        </div>}
                </div>
            </div>
        </>

    )
}