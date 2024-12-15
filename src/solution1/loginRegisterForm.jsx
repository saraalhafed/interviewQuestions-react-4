import React from 'react'
import { useState } from 'react'

const users  = [
    {username: 'john', password: '123456'},
]
export default function LoginRegisterForm() {
    //to make controlled component
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
//3 
    const handleSubmit =(e) => {
        e.preventDefault()

        // we have states for username, and password
        // we have a list of users
        // we want to check if the username and password match any of the users in the list

        const user = users.find(
            item => item.username === username && item.password === password)
  //if nothing match than return undifind ,no message abrear
            if (user) {
                alert('Login successful')
            }else {
                // alert('Login failed')
                //in our project if this user not in list we have to creat this user

                if (username.length < 6 || password.length < 6) {
                    alert('Username and password must be at least 6 characters long')
                    return
                }
                if (username.length > 20 || password.length > 20) {
                    alert('Username and password must be at most 20 characters long')
                    return
                }
                users.push({username, password})
                 alert('User is created')
            }
    }
  return (
    <div style={{margin: 'auto', width: '50%'}}>
        <h1>Login/Register</h1>
        <form style={{display: 'flex', flexDirection: 'column'}}
          onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
        {/*     //contolled com */}
            <input type="text" id="username" name="username" 
                   value={username} 
                   onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" 
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
