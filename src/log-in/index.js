import "./log-in.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { Button } from "react-bootstrap";

const Login = ({setToken}) => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [info, setInfo] = useState({
        username: "",
        password: ""
    });
    const onChange = (e) => {
        setInfo({ ...info, [e.target.id]: [e.target.value]});
    }

    // if the username and pw are "test" then authorization succeeded, save this in cookies.
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info);
        if (info.username == 'test' && info.password == 'test') {
            setToken(true);
            cookies.set('Auth', true);
            navigate(-1);
        }
        else {
            setToken(false);
        }
        
      };

    // navigate to create account page if user click on the creat new account button
    const createAccount = () => {
        navigate('/create');
    }
    return (
    
    <div className="container">
        <div className="log-in">
            <h2>Log in</h2>
        </div>
        <form className="mt-2">
            <div className="form-group" style={{display: 'flex', justifyContent: 'center', alignContent: 'baseline'}}>
                <label htmlFor="username" style={{marginRight: '20px'}}>Username</label>
                <input
                style={{width: '300px', marginBottom: '20px'}}
                type="text"
                className="form-control"
                placeholder="Username"
                id="username"
                value={info.username}
                onChange={onChange}
                />
            </div>
            <div className="form-group" style={{display: 'flex', justifyContent: 'center', alignContent: 'baseline'}}>
                <label htmlFor="password" style={{marginRight: '20px'}}>Password</label>
                <input
                style={{width: '300px', marginBottom: '30px'}}
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                value={info.password}
                onChange={onChange}
                />
            </div>
            <div className="account-button">
                <Button onClick={createAccount} variant="link">Don't have an account? Create one</Button>
            </div>
            <div className="log-in">
                <button
                    className="btn btn-primary mt-2"
                    disabled={!info.username || !info.password}
                    onClick={onSubmit}
                >
                    Login
                </button>
            </div>
            
            </form>

    </div>
    )
}

export default Login;