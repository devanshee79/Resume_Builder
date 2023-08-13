import React from 'react';
import DefaultLayout from '../components/DefaultLayout.js';
import { Button } from 'antd';
import "../resources/start.css";
import {useNavigate} from 'react-router-dom';


function Start(props) {
    console.log(props)
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login');
    }
    const handleSignUpClick = () => {
      navigate('/register');
    }

  return (
    <div>
        {/* <DefaultLayout> */}
            <p className='p1'>Welcome to Resume Wizard</p>
            <p className='p2'>Your Ultimate Resume Builder</p>
            <p className='p3'>Embark your carrier journey by creating free resume.</p>
            <img className="heroImg" src="images/hero_image.jpeg" alt="Hero" width="500" height="333"></img>
            <Button className="btn btn1" onClick={handleLoginClick}>Login</Button>
            <Button className="btn btn2" onClick={handleSignUpClick}>SignUp</Button>
        {/* </DefaultLayout> */}
    </div>
  )
}

export default Start