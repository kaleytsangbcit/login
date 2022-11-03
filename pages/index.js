import React from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { signInWithPopup, 
        GoogleAuthProvider, 
        createUserWithEmailAndPassword, 
        onAuthStateChanged, 
        signInWithEmailAndPassword,
        signOut 
} from "@firebase/auth";

export default function Home() {
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");

const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPasswor] = useState("");

const [user, setUser] = useState({});

const GoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  const authorization = auth;
  const result = await signInWithPopup(authorization, provider);
  console.log(result)
}

React.useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
}, [])

const HandleRegister = async () => {
  try {
    setRegisterEmail("");
    setRegisterPassword("");
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

const login = async () => {
  try {
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(user);
    } catch(error){
    console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth)
    console.log("user logged out");
  }

const HandleSubmit = event => {
  console.log("handle submit ran");
  event.preventDefault();
  event.target.reset();
}

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h3 className="text-3xl text-sky-400 font-bold underline absolute top-0 p-4">Welcome to Kaley's app</h3>
      <div className="grid grid-cols-3 gap-4">
        <form onSubmit={HandleSubmit}>
          <h2>Register</h2>
          <div className="border-2 p-2 m-2">
            <div className="pb-4">
              <label>Email</label>
              <input 
                placeholder="Email..."
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
                className="flow-root m-2 p-2"
              />
              <label>Password</label>
              <input 
                placeholder="Password..."
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
                className="flow-root m-2 p-2"
              />
              <button 
              type="submit"
              className="text-blue-700 
                        hover:text-white 
                        border border-blue-700 
                        hover:bg-blue-800
                        focus:ring-4
                        focus:outline-none
                        focus:ring-blue-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5 py-2.5
                        text-center
                        mr-2
                        dark:border-blue-500
                        dark:text-blue-500
                        dark:hover:text-white
                        dark:hover:bg-blue-600
                        dark:focus:ring-blue-800
                        "
              onClick={HandleRegister}>Register User</button>
              <button 
              type="submit"
              className="text-red-700 
                        hover:text-white 
                        border border-red-700 
                        hover:bg-red-800
                        focus:ring-4
                        focus:outline-none
                        focus:ring-red-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5 py-2.5
                        text-center
                        mr-2
                        dark:border-red-500
                        dark:text-red-500
                        dark:hover:text-white
                        dark:hover:bg-red-600
                        dark:focus:ring-red-800
                        "
              onClick={() => GoogleSignIn()}>Log in with Google</button>
            </div>
          </div>
        </form>

        <form onSubmit={HandleSubmit}>
          <h2>Login</h2>
          <div className="border-2 p-2 m-2">
            <div className="pb-4">
              <label>Email</label>
              <input 
                placeholder="Email..."
                onChange={(event)=> {
                  setLoginEmail(event.target.value)
                }}
                className="flow-root m-2 p-2"
              />
              <input 
                placeholder="Password..."
                onChange={(event)=> {
                  setLoginPassword(event.target.value)
                }}
                className="flow-root m-2 p-2"
              />
            </div>
            <button 
              type="submit"
              className="text-pink-700 
                        hover:text-white 
                        border border-pink-700 
                        hover:bg-pink-800
                        focus:ring-4
                        focus:outline-none
                        focus:ring-pink-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5 py-2.5
                        text-center
                        mr-2
                        dark:border-pink-500
                        dark:text-pink-500
                        dark:hover:text-white
                        dark:hover:bg-pink-600
                        dark:focus:ring-pink-800
                        "
              >Login User</button>
          </div>
        </form>

        <div className="relative">
          <h2>User Logged In:</h2>
          <div className="flow=root m-2 p-2">
            {user?.email}
          </div>
            <button 
              onClick={logout}
              className="text-pink-700 
                        hover:text-white 
                        border border-pink-700 
                        hover:bg-pink-800
                        focus:ring-4
                        focus:outline-none
                        focus:ring-pink-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5 py-2.5
                        text-center
                        mr-2
                        dark:border-pink-500
                        dark:text-pink-500
                        dark:hover:text-white
                        dark:hover:bg-pink-600
                        dark:focus:ring-pink-800
                        "
              >Logut</button>
        </div>
        </div>
      </div>
  )
}