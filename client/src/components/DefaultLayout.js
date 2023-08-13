import React from 'react';
// import './../resources/authentication.css';
import './../resources/defaultlayout.css';
import { Button, Dropdown, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


function DefaultLayout(props) {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'))

  
const items = [ 
  {
    key: '1',
    label: (
      <Link to='/home'>home</Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to='/profile'>profile</Link>

    ),
  },
  {
    key: '3',
    label: (
      
      <span onClick = {() =>{
        localStorage.removeItem('user')
        navigate('/login')
      }}>logout</span>
    ),
  },
];

  return (
    <div className="layout">
        <div className="header">
            <p>ResumeWizard</p>
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                >
                  <Button>button</Button>
                </Dropdown>
              </Space>
            </Space>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout