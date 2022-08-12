import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import EmployeeService from '../services/EmployeeService';

const EmployeeList = () => {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect( () => {
    const fetchData = async() => {
        setLoading(true);
        try {
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    fetchData();
  }, []);
    

  return (
    <div className='container mx-auto my-8'>
        
        <div className='h-12'>
            <button 
            onClick={() => navigate("/AddEmployee")} 
            className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Add employee</button>
        </div>

        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-slate-800'>
                    <tr>
                        <th className='text-left font-medium text-gray-50 tracking-wider py-4 px-6 uppercase'>First Name</th>
                        <th className='text-left font-medium text-gray-50 tracking-wider py-4 px-6 uppercase'>Last Name</th>

                        <th className='text-center font-medium text-gray-50 tracking-wider py-4 px-6 uppercase'>Email</th>
                        <th className='text-right font-medium text-gray-50 tracking-wider py-4 px-12 uppercase'>Actions</th>
                    </tr>
                </thead>
                {!loading &&( 
                <tbody className='bg-slate-600'>
                    {employees.map((employee) => (
                    <tr>
                        <td className='text-left px-6 py-3 whitespace-nowrap'>
                            <div className='text-sm text-white'>{employee.firstName}</div>
                        </td>
                        
                        <td className='text-left px-6 py-3 whitespace-nowrap'>                            
                            <div className='text-sm text-white'>{employee.lastName}</div>
                        </td>
                        
                        <td className='text-center px-6 py-3 whitespace-nowrap'>                            
                            <div className='text-sm text-white'>{employee.emailID}</div>
                        </td>
                        
                        <td className='text-right px-6 py-3 whitespace-nowrap font-medium text-sm'>                            
                            <a href='#' className='text-indigo-400 hover:text-indigo-800 px-4'>Edit</a>
                            <a href='#' className='text-red-500 hover:text-red-900 px-4'>Delete</a>
                        </td>  
                    </tr>
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default EmployeeList