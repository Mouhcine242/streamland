import React  , {useRef , useState}from 'react'
import {Navigate , useNavigate ,Link} from 'react-router-dom'
import '../styles/Authentication.css';
import { GoogleAuthProvider,
   signInWithPopup ,
   createUserWithEmailAndPassword ,
   signInWithEmailAndPassword ,  signOut} from "firebase/auth";
import { auth } from '../lib/firebase';


const Authentication = () => {

  const [signUpEmail , SetsignUpEmail] = useState("")
  const [signUpPassword , SetsignUpPassword] = useState("")
  const [signInEmail , SetsignInEmail] = useState("")
  const [signInPassword , SetsignInPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [name , SetName] = useState("")
  const navigate = useNavigate();


  

  const SignInWithGoogle= ()=> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth , provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  async function registerUser(event){
    event.preventDefault();
    const response = await fetch('http://localhost:4000/v1/auth/register' , {
      mode: 'no-cors',
      method : 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name , 
        signUpEmail,
        signUpPassword
      })
    })

    const data = await response.json();
    if (data.status === 'ok') {
			navigate('/')
		}
  }

  async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:4000/v1/auth/login', {
      mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				signInEmail,
				signInPassword,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

  return (
<div className = 'authentication'>
  <div className="container1" id="container1">
    <div className="form-container sign-up-container">
      <form onSubmit={registerUser} >
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social" >
            <i className="fab fa-facebook-f" />
          </a>
          <a className="social" onClick={SignInWithGoogle} href="/">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" required onChange={(event) =>{SetName(event.target.value)}} value={name}/>
        <input type="email" placeholder="Email" required onChange={(event) =>{SetsignUpEmail(event.target.value)}} value={signUpEmail}/> 
        <input type="password" placeholder="Password" required onChange={(event) =>{SetsignUpPassword(event.target.value)}}  value={signUpPassword}/>
        <button type='submit'>Register</button>
        {/* <input type="submit" value="Register" /> */}
      </form>
    </div>
    <div className="form-container sign-in-container">
      <form onSubmit={loginUser} >
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="social" onClick={SignInWithGoogle} href="/">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" required onChange={(event) =>{SetsignInEmail(event.target.value)}} value = {signInEmail}  />
        <input type="password" placeholder="Password"  required onChange={(event) =>{SetsignInPassword(event.target.value)}} value = {signInPassword} />
        <a href="#">Forgot your password?</a>
        <button type='submit'>Log In</button>
        {/* <input type="submit" value="Register" /> */}
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" id="signIn">
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost" id="signUp">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )

}

export default Authentication;

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container1');

if(signUpButton){
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});}

if(signInButton){
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
}