import { Link, useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Home() {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState('');

    const jwtToken = Cookies.get('jwt_token')
    //console.log(jwtToken);
    useEffect(() => {
        //event.preventDefault();
        if (jwtToken === undefined) {
            navigate("/login");
        }else{
            fetchData();
        }
        
    }, [])

    const fetchData = async () => {
        //event.preventDefault();
        const response = await fetch("http://localhost:8090/authentication/userInfo", {
            method: "GET",
            headers:{
                "Authorization" : "Bearer " + jwtToken
            }
        });
        const userInfoData = await response.json();
        console.log(userInfoData);
        setUserInfo(userInfoData);
    }

    return (
        <>
            <Navbar />
            <h3 className={classes.mainHeading}>Welcome {userInfo.fullName}! you can Generate and check Strength of password</h3>
            <div className={classes.container} >
                <div>
                    <img src="https://img.freepik.com/free-vector/data-protection-law-illustration-concept_114360-971.jpg" alt="home" className={classes.homeImg} />
                </div>
                <div className={classes.home}>
                    <Link to='/generate' className={classes.card}>
                        <div >
                            <h3>Generate Your strong Password Here</h3>
                            <p>Create a Password is like a diamond it is dificult to crack it and should be strong.</p>
                        </div>
                    </Link>
                    <Link to='/checkstrength' className={classes.card}>
                        <div>
                            <h3>Check Your Password Strength Here</h3>
                            <p>Password should be contain atleast follows</p>
                            <ul>
                                <li>One special charecter</li>
                                <li>One upper case letter</li>
                                <li>One lower case letter</li>
                                <li>One numeric value</li>
                                <li>For good score password length should be 16</li>
                            </ul>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;