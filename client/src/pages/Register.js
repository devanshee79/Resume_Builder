import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Spin} from "antd";
import '../resources/authenticationRegister.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LeftCircleFilled } from "@ant-design/icons";

function Register() {

  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/start");
  }
  const onFinish = async (values) => {
    setLoading(true);
    try{
      console.log(values);
      await axios.post('api/user/register', values)
      setLoading(false)
      navigate('/home')
    }catch(err){
      setLoading(false);
      console.log(err.message);
      alert('Registeration failed');
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

        <h1 className='auth'>SignUp</h1><hr />
      <Form.Item name="username" label="username"labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }} required= "true">
          <Input />
      </Form.Item>
      <Form.Item name="password" type="password" label="password" labelCol={{ span: 8 }} required="true"
        wrapperCol={{ span: 12 }}>
          <Input />
      </Form.Item>
      <Form.Item name="cpassword" type="password" label="confirm password" labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }} required= "true">
        <Input />
      </Form.Item>

      <Button type='primary' htmlType='submit' >
        SignUp
      </Button>

      </Form>
    </div>
  )
}

export default Register