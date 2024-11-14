import { collection, getDoc, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase';

function SearchBar() {
  const [username,setusername]=useState("");
  const [user,setuser] = useState(null);
  const [err,seterr] = useState(false);

  const handlesearch = async()=>{
    const q=query(
      collection(db,"users"),
    where("displayName", "==" , username)
  );
  try {
  const querySnapshot = await getDoc(q);
  querySnapshot.forEach((doc)=>{
    setuser(doc.data())
  });
  }catch(err){
    seterr(true);
  }
    };
    const handlekey = (e)=>{
      e.code === "Enter" && handlesearch();
    }
    const handleSelect = ()=>{
      
    }
  
  return (
    <div className='searchbar'>
      <div className="searchform">
        <input type="text" placeholder='Find a user' onKeyDown={handlekey} onChange={e=>setusername(e.target.value)} />
      </div>
      {err && <span>User not Found</span>}
      { user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURl} alt="" />
      <div className="userchatinfo">
        <span>{user.displayName}</span>
      </div>
      </div>}
    </div>
  )
}

export default SearchBar