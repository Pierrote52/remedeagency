import './style/style.css'
import logo from '../../img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { callAPI } from '../../services/callApi';

function Header() {
    const [isLoged, setLoged] = useState(false);

    return (<nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
            <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
        <Link to={'/signin'} className="signIn">
            <i className="fa fa-user-circle"></i>
            <span className="main-nav-item">Sign In </span>
        </Link>

    </nav>)
}

export default Header;