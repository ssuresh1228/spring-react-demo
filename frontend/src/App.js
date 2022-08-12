import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';


function App() {
  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} /> 
          <Route path ="/EmployeeList" element={<EmployeeList/>} />
          <Route path ="/AddEmployee" element={<AddEmployee/>} />  
        </Routes>
      </BrowserRouter>
    </>
  ); 
}

export default App;