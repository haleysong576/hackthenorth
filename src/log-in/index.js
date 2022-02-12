import "./log-in.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

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
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info);
        if (info.username == 'test' && info.password == 'test') {
            setToken(true);
            cookies.set('Auth', true);
            // navigate('/');
            navigate(-1);
        }
        else {
            setToken(false);
        }
        
      };
    return (
    
    <div style={{display:"flex", justifyContent: 'center', marginTop: '30px', flexDirection: 'column'}}>
        <div style={{display:"flex", justifyContent: 'center', marginBottom: '50px'}}>
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
            <div style={{display: 'flex', justifyContent: 'center'}}>
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