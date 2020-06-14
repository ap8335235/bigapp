import React,{useState} from 'react';
import './auth.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';


const AuthPage=()=>{
    const[checkComponent,setCheckComponent]= useState(true);
    const[componentText,setComponentText]=useState(`Don't have a account? Register Now`);
    const componentChangeHandler=()=>{
      setCheckComponent(prevState => !prevState);
      if(componentText===`Don't have a account? Register Now`){
        setComponentText(`Have a account ? Login Now`);
      }else{
        setComponentText(`Don't have a account? Register Now`);
      }
      
    };
    return(
        <div className='AuthPage'>
            
<div className={`signinComp ${checkComponent  ? 'active' : ''}`}><SignIn /></div>
 <div className={`signupComp  ${!checkComponent  ? 'active' : ''}`}><SignUp /></div>

<div className='checkComponentChange' onClick={()=>componentChangeHandler()}>{componentText}</div>
        </div>
    );
};


export default AuthPage;