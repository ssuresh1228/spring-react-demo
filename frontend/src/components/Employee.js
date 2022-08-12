import React from 'react'

const Employee = ({employee}) => {
  return (
    <tr key={employee.id}>
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
  )
}

export default Employee