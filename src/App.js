import React from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState('');

  const studentSearch = (name) => {
    setUser([...user, name]);
  };

  const errorMessage = (message) => {
    setError([...error, message]);
    setTimeout(() => setError(''), 5000);
  };
  return (
    <div className='App'>
      <div className='layout-column justify-content-center align-items-center w-50 mx-auto'>
        <Search studentSearch={studentSearch} />
        <Error message={error} />
        <ResidentsList user={user} />
      </div>
    </div>
  );
}

export default App;
