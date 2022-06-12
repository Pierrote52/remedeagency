
import { Link, useNavigate } from "react-router-dom";
import Header from "../../header/header"
import { useEffect, useState } from 'react'
import { callAPI } from "../../../services/callApi";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../reducers/isLogged";
import userEvent from "@testing-library/user-event";


function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispach = useDispatch()
  const [test, setTest] = useState()
  const _value = useSelector((state) => state.user.token)
  const [vale, setVale] = useState(_value)
  const navigate = useNavigate()



  async function connectApi(email, password) {
    const res = await callAPI(email, password).then((e) => { return e });
    if (res.status === 200) {
      localStorage.setItem('token', res.body.token)

      dispach(login({ value: true, token: res.body.token }));
      navigate('/user')
    }


  }

  return <div>
    <Header />

    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form action="submit" onSubmit={(e) => { e.preventDefault(); connectApi(email, password) }}>
          <div className="input-wrapper">
            <label htmlFor="username">Username </label>
            <input type="text" id="username" onChange={(e) => { e.preventDefault(); setEmail(e.target.value) }} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => { e.preventDefault(); setPassword(e.target.value) }} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>


          </div>
          <input type="submit" className="sign-in-button" value="SIGN IN" />


        </form>
      </section>
    </main></div>
}

export default SignIn;