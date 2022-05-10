

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Acceuil from "../components/screens/Acceuil/Acceuil";
import App from '../App'
import SignIn from "../components/screens/Sign-in/Sign-In";
import User from "../components/screens/User/User";


function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Acceuil />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="*" element={<Acceuil />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
    </BrowserRouter>

}

export default Router;