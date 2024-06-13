import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Sales() {
  return (
   <div className='Sales'>
      <h1>Sales</h1>
      
   <Outlet />
    </div>

)
};
