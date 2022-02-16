import "./account.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const Account = ({setToken}) => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [info, setInfo] = useState({
        username: "",
        password: ""
    });
    const onChange = (e) => {
        setInfo({ ...info, [e.target.id]: [e.target.value]});
    }
    const onSubmit = () => {
        setToken(true);
        cookies.set('Auth', true);
        navigate('/');
        
      };
    return (
    
    <div className="container">
        <div className="title">
            <h2>Create an account</h2>
        </div>
        <form className="mt-2">
            <div className="form">
                <label htmlFor="username" style={{marginRight: '20px'}}>New Username</label>
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
            <div className="form">
                <label htmlFor="password" style={{marginRight: '20px'}}>New Password</label>
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
                <button
                    className="btn btn-primary mt-2"
                    disabled={!info.username || !info.password}
                    onClick={onSubmit}
                >
                    Create Account
                </button>
            </div>
            
            </form>

    </div>
    )
}

export default Account;