import logo from "./GloboLogo.png";
import { useNavigate } from "react-router-dom";

const Header = ({token, setToken}) => {
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/login');
    };
    const logout = () => {
        setToken(false);
        this.setState({});
    };
    return (
        <header className="row">
            <div className="col-md-5">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <div className="col-md-7 mt-5 subtitle">
                The biggest hackathon in Canada for 19 years
            </div>
            {!token? <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button
                    className="btn btn-primary mt-2"
                    onClick={onSubmit}
                >
                    Login
                </button>
            </div>: <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button
                    className="btn btn-primary mt-2"
                    onClick={logout}
                >
                    Logout
                </button></div>}
        </header>
    );
    
    };

export default Header;