import './App.css';
import {CopyFilled} from '@ant-design/icons';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import Profile from './pages/profile.js';
import Templates from './pages/templates/index.js';
import Start from './pages/Start.js';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {/* <Route path = '/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route> */}
          <Route path = '/home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
          <Route path = '/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
          <Route path = '/templates/:id' element={<ProtectedRoute><Templates/></ProtectedRoute>}></Route>
          <Route path = '/' element={<Start/>}></Route>
          <Route path = '/login' element={<Login/>}></Route>
          <Route path = '/register' element={<Register/>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

export function ProtectedRoute(props){
  if(localStorage.getItem("user")){
    return props.children;
  }else{
    return <Navigate to="/login"></Navigate>
  }
}
