
import urlBase from '../config.json'


/*
Cette fonction va retourner l'objet de réponse à l'appel API
*/ 
export async function callAPI(email, password) {
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
        return data
}

export async function profil(token){
  const response = await fetch(urlBase.urlAPI +'/user/profile', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }),
        })
        const data = await response.json()
        return data
      

}

export async function changeNameUser(props){
  const response = await fetch(urlBase.urlAPI+'/user/profile', {
    method: 'PUT',
    headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + props.token
    }),
    body:JSON.stringify({
      firstName:props.newFirstName,
      lastName: props.newName
  }),
})
const data = await response.json()
return data
}


