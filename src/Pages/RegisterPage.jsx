import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, storage } from "../firebase";
import './RegisterPage.css';

function RegisterPage() {
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.includes("image")) {
      setFile(selectedFile);
    } else {
      setErr("Please upload a valid image file.");
    }
  };

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!file) {
      setErr('Please upload a file!');
      return;
    }

    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create reference to Firebase Storage
      const storageRef = ref(storage, `avatars/${res.user.uid}`);

      // Upload file
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr('Something went wrong during file upload.');
          setLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Update Firebase User Profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            // Save user details to Firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            setLoading(false);
            navigate("/");
          }).catch(() => {
            setErr('Failed to get download URL.');
            setLoading(false);
          });
        }
      );
    } catch (err) {
      setErr('Something went wrong.');
      setLoading(false);
    }
  }

  return (
    <div className='formContainer'>
      <div className="form-rapper">
        <span className="logo">Shareef Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Display Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input
            style={{ display: 'none' }}
            type='file'
            id="file"
            onChange={handleFileChange}
          />
          <label htmlFor='file'>
            <AddPhotoAlternateIcon />
            <span> Add an avatar</span>
          </label>

          {/* Display selected file preview */}
          {file && (
            <div>
              <p>Selected file: {file.name}</p>
            </div>
          )}

          <button type="submit" disabled={loading}>Sign Up</button>

          {loading && <p>Uploading...</p>}
          {err && <span className="error">{err}</span>}
        </form>

        <p> You do have an account? <Link to='/Login'>Login</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage;