import { useState } from 'react'
import './style/style.css'
import { changeNameUser } from '../../../services/callApi';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function EditName(props) {
    const [newName, setNewName] = useState();
    const [newFirstName, setNewFirstName] = useState();
    const token = useSelector((state) => state.user.value.token);
    const navigate = useNavigate()


    async function changeName() {
        if (newFirstName && newName) {
            const res = await changeNameUser({ newName: newName, newFirstName: newFirstName, token: token })
            if (res.status == 200) {
                props.returnUser()
                props.quitComponent()
            } else {
                return false
            }
        }
    }




    return <div style={props.display ? { display: "flex" } : { display: "none" }} id='EditNamePopUp'>
        <p>Veuillez saisir votre nouveau nom d'utilisateur :  </p>
        <input type="text" placeholder='Nouveau Nom' onChange={(e) => { setNewName(e.target.value) }}></input>
        <input type="text" placeholder='Nouveau Prénom' onChange={(e) => { setNewFirstName(e.target.value) }}></input>
        <div className='buttonsModifs'> <button onClick={() => { changeName() }}>Modifier</button><button style={{ backgroundColor: "red" }} onClick={() => { props.quitComponent() }}>Annuler</button></div>
    </div >
}

export default EditName;