import React from 'react'
import { useState } from 'react'
export default function Followers() {
    const [users, setUsers] = useState([  /* i want to add default users ,list [{},{}] users state should be array to stor all the users */

        {
            "name": "barry",
            "followers": [],
            "following": []
        },
        {
            "name": "sara",
            "followers": [],
            "following": []
        },
        {
            "name": "sheila",
            "followers": [],
            "following": []
        },
        {
            "name": "ruta",
            "followers": [],
            "following": []
        }


    ])
    //info holding from input and put it in this arry wich is anotherstate
    const [newUser, setNewUser] = useState('') 
    const [follower, setFollower] = useState('')
    const [following, setFollowing] = useState('')
    console.log(users)


    const handleSubmit = (e) => {
        e.preventDefault()
    
        //i need to get the user barry  than sara,barray will follow sara
        const user1 = users.findIndex(item => item.name === follower)//barry the first input her follower for sara
        const user2 = users.findIndex(item => item.name === following)//sara , get just index of sara

        console.log(user1, user2)// 0 Barry   1 sara  i get  the index of them


        /* we cant update the state  without setstate() ,shallow copy cant update  the values inside the follower[]*/
         // here we update the state directly and it is not good practice
        // users[user1].following.push(user2)
         //users[user2].followers.push(user1)
          // make a copy of the state
         // const temp = [...users] // this is a shallow copy effect the original one copy just the first level not nested obj
        // deep copy way2  for deep copy :, convert the state to string than convert it to obj,this is easy way to make deep copy 
        //ther is another way ,object.keys to get [] contain all the keys than we make copy of this arry in tepm array
        const temp = JSON.parse(JSON.stringify(users)) //temperary just name variable

        if (user1 === user2) { //not allow for user to folllow themslf
            alert('cannot follow yourself')
            return
        }
        if (temp[user1].following.includes(user2)) {//each user just follow another user one time
            alert('already following')
            return
        }
        temp[user1].following.push(user2)/*we update the copy array temp directly than we will update Users original array sara will in following [] of barry  */
        temp[user2].followers.push(user1)
        setUsers(temp)// we update the state Users not directly with deep copy temp , update any state need always setstate()

        alert(`${follower} is now following ${following} and has 
            ${temp[user1].following.length} followings and 
            ${temp[user1].followers.length} followers
         `)
    }
    console.log(users)
  return (
    <div>
        <div>
            <input type="text" placeholder='enter a new user' 
               value={newUser}
               onChange={(e) => setNewUser(e.target.value)}
            />
            <button onClick={
                () => {
                    setUsers([...users, {name: newUser, followers: [], following: []}])
                    setNewUser('')
                }
            }>Add</button>
        </div>
        <div>
            <h3>Users</h3>
            {users.map((item, index) => <p key={index}>{item.name}</p>)}{/* ,to add new user to the list users */}
        </div>
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='follower' 
                    value={follower}
                    onChange={(e) => setFollower(e.target.value)} /> {/* barry will follow */}
                <span> will be following </span>
                <input type="text" placeholder='following' 
                    value={following}
                    onChange={(e) => setFollowing(e.target.value)}  />{/* sara*/}
              
                <button type='submit'>Follow</button>
            </form>
        </div>
    </div>
  )
}

