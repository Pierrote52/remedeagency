import axios from "axios";
import urlBase from '../config.json'


/*
Cette fonction va retourner l'objet de réponse à l'appel API
*/ 
export async function callAPI(email, password) {
  // const res= await  axios.post(urlBase.urlAPI+"/user/login",{email:email, password:password}).then((e)=>{
  //      return e.data
  //  })
  //  return res;
  const response = await fetch(urlBase.urlAPI+'/user/login', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body:JSON.stringify({
              email: email,
              password: password,
          }),
        })
        const data = await response.json()
        console.log(data)
        return data
}

export async function profil(token){
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }),
        })
        const data = await response.json()
        console.log(data)
        return data
      

}