/* import React from 'react';
import { useAuth } from '../Context/Authentication';

function UserProfile(){
    const{currentUser} = useAuth();
    if(!currentUser){
        return<p>No user Logged in</p>
    }
    console.log(currentUser)


  return (
    <div className='userprofile'>
        <h2>User Profile</h2>
        <p>Email:{currentUser.email || "No email available"}</p>
    </div>
  );
};


export default UserProfile*/