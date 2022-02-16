import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cookies from 'universal-cookie';
import './main-page.css';

const Header = ({token, setToken}) => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/login');
    };
    const logout = () => {
        setToken(false);
        cookies.set('Auth', false);
        console.log(cookies.get('Auth'));
    };
    const homeClick = () => {
        navigate('/');
    }
    return (
        <div className="authButton">
             <Button 
                variant="success"
                onClick={homeClick}
            >
                Home
            </Button>
            {!token? 
           
                <Button
                    variant="success"
                    onClick={onSubmit}
                >
                    Login
                </Button> : 
                <Button
                    variant="success"
                    onClick={logout}
                >
                    Logout
                </Button>}
        </div>
    );
    
    };

export default Header;