import Header from './components/header';
import Create from './components/create';
import ListTodo from './components/listTodo';
import './App.css';
import Login from './components/Login';
import { Routes,Route, useNavigate } from 'react-router-dom';

 
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
        </Routes>

</>

  );
}

export default App;
