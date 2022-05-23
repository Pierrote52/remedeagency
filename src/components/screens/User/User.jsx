import './style/style.css'
import { profil } from "../../../services/callApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logo from '../../../img/argentBankLogo.png'
import { logout } from "../../../reducers/isLogged";
import { useNavigate } from 'react-router-dom';
import EditName from '../../popUp/editName/EditName';
import Header from '../../header/header';




function User() {
    const token = useSelector((state) => state.user.value.token)
    const [firstName, setFirstname] = useState();
    const [name, setName] = useState();
    const dispach = useDispatch();
    const navigate = useNavigate();
    const [editName, setEditName] = useState(false);
    useEffect(() => {
        actualiseState()


    }, []);

    async function signOut() {
        dispach(logout());
        navigate('/home');
    }


    async function testProfil(e) {
        const res = await profil(token);
        return res;
    }
    async function actualiseState() {
        testProfil(token).then((result) => {
            setFirstname(result.body.firstName);
            setName(result.body.lastName);

        })
    }
    return (
        <div id="profil">
            <EditName display={editName} quitComponent={() => { setEditName(false) }} returnUser={() => (actualiseState())} />
            {/* <nav className="main-nav">
                <a className="main-nav-logo" href="./index.html">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href="./user.html">
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </a>
                    <button className="main-nav-item" onClick={() => { signOut() }}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </button>
                </div>
            </nav> */}
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{firstName} {name}</h1>
                    <button onClick={() => { setEditName(!editName) }} className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button" onClick={(e) => { e.preventDefault() }}>View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>

    )
}

export default User;