import React from 'react'
import { useFirebase } from '../Context/FirebaseContext';
import { Button } from 'react-bootstrap';

function Dashboard() {
    const firebase = useFirebase();
    const user = firebase.user;
    console.log(user);
  return (
    <div>
        <img src="" className="text-center"/>
        <img src={user == null? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921": user.photoURL} className="rounded mx-auto d-block img-fluid" alt="..." />
        <h3 className='text-center m-3'>{user== null? "": `hi, ${user.displayName}`}</h3>
        <div className="text-center">
        <Button className='btn btn-danger' onClick={firebase.SignOut}>Sign Out</Button>
        </div>

        <h1 className='display-1 text-center' style={{marginTop: 50}}>Hello World</h1>
    </div>
  )
}

export default Dashboard;