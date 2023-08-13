import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Spin} from "antd";
import { LeftCircleFilled } from "@ant-design/icons";
import '../resources/authenticationLogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  const[loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleBackBtn = () => {
    navigate("/start");
  }
  const onFinish = async (values) => {
    setLoading(true);
    try{
      console.log(values);
      const user = await axios.post('api/user/login', values)
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(user));
      navigate('/home')
    }catch(err){
      setLoading(false);
      console.log(err.message);
      alert('Login failed');
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate('/home');
    }
  })

  return (
    <div className="auth-parent">
      {loading && <Spin />}
      <Form layout='horizontal' onFinish={onFinish}>
      <LeftCircleFilled onClick= {handleBackBtn} style={{fontSize: "33px",color: "rgba(41, 144, 172, 0.85)", position: "relative", top: "60px"}}/>  
        <h1 className='auth'>Login</h1><hr />
      <Form.Item name="username" label="username" required="true">
          <Input />
      </Form.Item>
      <Form.Item name="password" type="password" label="password" required="true">
          <Input />
      </Form.Item>

      <Button type='primary' htmlType='submit'>
        Login
      </Button> 

      </Form>
    </div>
  )
}

export default Login;