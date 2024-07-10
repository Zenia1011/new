import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('/auth/login-history');
        setHistory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h1>Login History</h1>
      <table>
        <thead>
          <tr>
            <th>Browser</th>
            <th>OS</th>
            <th>Device</th>
            <th>IP</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.browser}</td>
              <td>{entry.os}</td>
              <td>{entry.device}</td>
              <td>{entry.ip}</td>
              <td>{entry.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoginHistory;