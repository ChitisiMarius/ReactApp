import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Serverul nu rulează.');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://chitisimarius.com:5000/');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Nu se poate conecta la server.', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>{message}</div>
  );
}

export default App;