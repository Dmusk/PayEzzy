import React, { useState } from 'react'
import Users from '../components/Users';
import Balance from '../components/Balance';
import Appbar from '../components/Appbar';

const Dashboard = () => {

  const [users, setUsers] = useState([]);
  return (
    <div>
      <Appbar />
      <div className='m-8'>
        <Balance />
        <Users />
      </div>
    </div>
  )
}

export default Dashboard