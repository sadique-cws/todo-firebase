import Header from './components/header';
import Create from './components/create';
import ListTodo from './components/listTodo';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes,Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';






const Logout = () => {
  const nav = useNavigate()
    localStorage.clear();
    nav("/login");

    return (
      
    )

}
 
function App() {
  const nav = useNavigate()
  
  return (
     <>
      <Header/>
        <Routes>
        <Route exact path="/" element={
                <>
                  <Create/> 
                  <ListTodo/>
                </>
              } />

            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/logout" element={<Logout/>}/>
        </Routes>

</>

  );
}

export default App;
