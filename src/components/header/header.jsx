import './style/style.css'
import logo from '../../img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { callAPI, profil } from '../../services/callApi';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../reducers/isLogged";
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isLoged, setLoged] = useState(false);
    const token = localStorage.getItem('token')
    const dispach = useDispatch();
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
    useEffect(() => {
        if (token) {
            setLoged(true)
            takeNameUser(token)
        }


    }, [])

    async function signOut() {
        localStorage.removeItem('token')
        dispach(logout());
        navigate('/home');



    }
    async function takeNameUser() {

        const res = await profil(token);
        setUserName(res.body.lastName)

    }

    return (<nav className="main-nav">
        <Link to={"/"} className="main-nav-logo" >
            <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isLoged ? <div>
            <Link to={"/user"} className="main-nav-item" >
                <i className="fa fa-user-circle"></i>
                {userName}
            </Link>
            <button className="main-nav-item" onClick={() => { signOut() }}>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </button>
        </div> : <Link to={'/signin'} className="signIn">
            <i className="fa fa-user-circle"></i>
            <span className="main-nav-item">Sign In </span>
        </Link>}


    </nav>)
}

export default Header;